import { notFoundError, unauthorizedError } from "@/errors";
import { PaymentType } from "@/protocols";
import { paymentsRepository } from "@/repositories/payments-repositoy";
import ticketsRepository from "@/repositories/tickets-repository";



export async function getTicketPaymentService(ticketId: string, id: number) {

    const ticket = await paymentsRepository.getTicketsPaymentsById(ticketId);
    if(!ticket) throw notFoundError();
    const payment = await paymentsRepository.getTicketsPaymentsByUserId(ticketId, id);
    if(!payment) throw unauthorizedError();
    return payment;

}

export async function sendPaymentService(body: PaymentType, id: number) {
    
    console.log("body", body)
    const ticket = await ticketsRepository.getTicketById(body.ticketId);
    if(!ticket) throw notFoundError();
    const payment = await ticketsRepository.getTicketByUserId(body.ticketId, id)
    if (!payment) throw unauthorizedError();

    const paymentAdd = await paymentsRepository.createPayment(body.ticketId, body.cardData.issuer, body.cardData.number)
    const updateTicket = await ticketsRepository.updateTicketStatus(body.ticketId)
    return paymentAdd;

}