import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import { app } from '../app';
import request from 'supertest';
declare global {
    function signin(): string[];
}

jest.mock('../nats-wrapper')

let mongo: any;
beforeAll(async () => {
    process.env.JWT = 'asdasdasd';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();
    await mongoose.connect(mongoUri, {

    });
});

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});

global.signin = () => {
    // Build a JWT payload {id, email}

    const payload = {
        id: new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    }

    // Create the JWT token!

    const token = jwt.sign(payload, process.env.JWT_KEY!)
    // Build session object {jwt: MY_JWT}

    const session = { jwt: token }
    // Turn that session into JSON

    const sessionJSON = JSON.stringify(session)
    // Take JSON and encode as base64

    const base64 = Buffer.from(sessionJSON).toString('base64')

    // Return a string thats the cookie with the encoded data

    return [`session=${base64}`]
}