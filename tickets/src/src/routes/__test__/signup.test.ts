import request from 'supertest';

import { app } from '../../app'


it('returns a 201 on successful signup', async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: '123123123'
    }).expect(201)
}

)
it('returns a 400 with an invalid email', async () => {
    await request(app).post('/api/users/signup').send({
        email: "test",
        password: '123123123'
    }).expect(400)
})

it('returns a 400 with an invalid password', async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: 'a'
    }).expect(400)
})

it('returns a 400 with missing email and password', async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
    }).expect(400)
    await request(app).post('/api/users/signup').send({
        password: '1234567'
    }).expect(400)
})

it('disallows dublicate email', async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: '123123123'
    }).expect(201)
})

it('sets cookie after successful sign in', async () => {
    const response = await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: '123123123'
    }).expect(201);

    expect(response.get('Set-Cookie')).toBeDefined
})