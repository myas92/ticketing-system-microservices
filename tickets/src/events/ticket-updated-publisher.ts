import {Publisher, Subjects, TicketUpdatedEvent} from '@myasticketing/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
    
}