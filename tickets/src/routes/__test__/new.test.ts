import request from 'supertest';
import { app } from '../../app';


it('Has a route handler listening to api/tickets for post requests', async () => {

    const response = await request(app).post('/api/tickets').send({});
    expect(response.status).not.toEqual(404)
})
it('Can only be accessed if the user is signed in', async () => {
    await request(app).post('/api/tickets').send({}).expect(401)

})
it('Returns a status code other than 401 if the use signed in ', async () => {
    const response = await request(app).post('/api/tickets').set('Cookie', global.signin()).send({});
    expect(response.statusCode).not.toEqual(401)
})
it('Returns an error if an invalid title is provided', async () => {

})
it('Returns an error if an invelid price is provided', async () => {

})
it('Create a tickets with valid inputs', async () => {

})