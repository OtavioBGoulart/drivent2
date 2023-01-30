import { prisma } from "@/config";


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

export const paymentsRepository = {
    getTicketsPaymentsById,
    getTicketsPaymentsByUserId
}

