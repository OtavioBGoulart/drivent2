import { notFoundError, unauthorizedError } from "@/errors";
import { PaymentType } from "@/protocols";
import { paymentsRepository } from "@/repositories/payments-repositoy";
import ticketsRepository from "@/repositories/tickets-repository";



export async function getTicketPaymentService(ticketId: string, id: number) {

    const ticket = await paymentsRepository.getTicketsPaymentsById(ticketId);
    //console.log(ticket)
    if(ticket.length === 0) throw notFoundError();
    const payment = await paymentsRepository.getTicketsPaymentsByUserId(ticketId, id);
    console.log("payment",payment)
    if(!payment) throw unauthorizedError();
    return payment;

}

export async function sendPaymentService(body: PaymentType, id: number) {
    
    //console.log("body", body)
    const ticket = await ticketsRepository.getTicketById(body.ticketId);
    console.log("retornoTicket",ticket)
    if(!ticket) throw notFoundError();
    const payment = await ticketsRepository.getTicketByUserId(body.ticketId, id)
    if (!payment) throw unauthorizedError();

    const paymentAdd = await paymentsRepository.createPayment(body.ticketId, body.cardData.issuer, body.cardData.number)
    console.log(paymentAdd)
    const updateTicket = await ticketsRepository.updateTicketStatus(body.ticketId)
    return paymentAdd;

}