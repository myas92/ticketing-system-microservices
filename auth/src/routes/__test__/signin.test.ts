import request from 'supertest';

import { app } from '../../app'


it('Fials when an email that does not exist is supplied', async () => {
    await request(app).post('/api/users/signin').send({
        email: "test@test.com",
        password: '123123123'
    }).expect(400);

})


it('Fials when an incorrect password is supplied', async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: '123123123'
    }).expect(201);
    await request(app).post('/api/users/signin').send({
        email: "test@test.com",
        password: 'asdasdasd'
    }).expect(400);
})


it('Responds with a cookie when given a valid credentials', async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: '123123123'
    }).expect(201);
    const response = await request(app).post('/api/users/signin').send({
        email: "test@test.com",
        password: '123123123'
    }).expect(200);

    expect(response.get('Set-cookie')).toBeDefined()
})