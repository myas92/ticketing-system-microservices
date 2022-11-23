import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/tickets';


const createTicket = () => {
    return request(app).post('/api/tickets').set("Cookie", global.signin())
        .send({
            title: 'hey',
            price: 20
        })
}

it('Can fetch all tickets', async () => {
    await createTicket()
    await createTicket()
    await createTicket()
    const response = await request(app).get('/api/tickets').expect(200);
    expect(response.body.length).toEqual(3)
})