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


async function postTicket(id : number, typeId: number) {

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

const ticketsRepository = {
    getAllTicketsTypes,
    getAllTickets,
    postTicket,
    getMyCurrentTicket
}

export default ticketsRepository;