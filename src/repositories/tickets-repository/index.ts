import { prisma } from "@/config";
import { TicketStatus } from "@prisma/client";

async function getAllTicketsTypes() {

    return await prisma.ticketType.findMany()
}

async function getAllTickets(userId: number) {

    return await prisma.ticket.findFirst({
        where: {
            Enrollment: {
                userId
            }
        },
        include: {
            TicketType: true
        }
    })
}


async function postTicket(id: number, typeId: number) {

    return await prisma.ticket.create({
        data: {
            ticketTypeId: typeId,
            enrollmentId: id,
            status: TicketStatus.RESERVED
        },
        include: {
            TicketType: true
        }
    })

}

export async function getMyCurrentTicket(ticketId: number) {

    return await prisma.ticket.findFirst({
        where: {
            id: ticketId
        },
        include: {
            TicketType: true
        }
    })
}

async function updateTicketStatus(ticketId: number) {

    return await prisma.ticket.update({
        where: { id: ticketId },
        data: {
            status: TicketStatus.PAID
        }
    })
}

async function getTicketById(id: number) {

    return await prisma.ticket.findFirst({
        where: { id }
    })
}

async function getTicketByUserId(id: number, userId: number) {

    return await prisma.ticket.findFirst({
        where: {
            AND: [
                { id },
                { Enrollment: { userId } }
            ]
        }

    })
}

const ticketsRepository = {
    getAllTicketsTypes,
    getAllTickets,
    postTicket,
    getMyCurrentTicket,
    updateTicketStatus,
    getTicketById,
    getTicketByUserId
}

export default ticketsRepository;