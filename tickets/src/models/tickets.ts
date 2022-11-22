import mongoose, { mongo } from 'mongoose'


interface TicketAttrs {
    title: string,
    price: number,
    userId: string
}

interface TicketDoc extends mongoose.Document {
    title: string,
    price: number,
    userId: string
}

interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attr: TicketAttrs): TicketDoc
}


const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        requied: true
    },
    price: {
        type: Number,
        requied: true
    },
    userId: {
        type: String,
        requied: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id,
                delete ret._id
        }
    }
})

// ساخت یک فانکشن جدید برای ذخیره رکورد جدید

ticketSchema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket(attrs);
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema)

export { Ticket };