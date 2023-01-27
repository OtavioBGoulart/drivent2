import { prisma } from "@/config";

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

async function getEnrollmentId(userId: number) {

    return await prisma.enrollment.findFirst({
        where: {
            userId
        },
        select: {
            id: true
        }
    })
    
}
async function postTicket(id : number, typeId: number) {

    return await prisma.ticket.create({
        data: {
            ticketTypeId: typeId,
            enrollmentId: id,
            status: "RESERVED"
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
    getEnrollmentId,
    postTicket,
    getMyCurrentTicket
}

export default ticketsRepository;