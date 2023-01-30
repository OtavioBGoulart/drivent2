import { prisma } from "@/config";
import { PaymentType } from "@/protocols";
import { TicketStatus } from "@prisma/client";


async function getTicketsPaymentsById(ticketId: string) {

    return await prisma.payment.findMany({
        where: {
            ticketId: Number(ticketId)
        }
    })
}

async function getTicketsPaymentsByUserId(ticketId: string, id: number) {

    return await prisma.payment.findFirst({
        where: {
            Ticket: {
                AND: [
                    { id: Number(ticketId) },
                    { Enrollment: { userId: id } }
                ]
            },
        }
    });
}

async function createPayment(ticketId: number, cardIssuer: string, cardLastDigits: number) {

    const ticket = await prisma.ticket.findFirst({
        where: { id: ticketId },
        include: { TicketType: true }
    })
    
    return await prisma.payment.create({
        data: {
            ticketId,
            cardIssuer,
            cardLastDigits: cardLastDigits.toString().slice(-4),
            value: ticket.TicketType.price 
        }
    })
}



export const paymentsRepository = {
    getTicketsPaymentsById,
    getTicketsPaymentsByUserId,
    createPayment,
}

