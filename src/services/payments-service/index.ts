import { notFoundError, unauthorizedError } from "@/errors";
import { paymentsRepository } from "@/repositories/payments-repositoy";


export async function getTicketPaymentService(ticketId: string, id: number) {

    const ticket = await paymentsRepository.getTicketsPaymentsById(ticketId);
    if(!ticket) throw notFoundError();
    const payment = await paymentsRepository.getTicketsPaymentsByUserId(ticketId, id);
    if(!payment) throw unauthorizedError();
    return payment;

}