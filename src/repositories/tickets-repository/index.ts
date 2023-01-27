import { prisma } from "@/config";

async function getAllTicketsTypes() {

    return prisma.ticketType.findMany()
}

async function getAllTickets(userId: number) {
    
    return prisma.ticket.findFirst({
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

    return prisma.enrollment.findFirst({
        where: {
            userId
        },
        select: {
            id: true
        }
    })
    
}
async function postTicket(id : number, typeId: number) {

    return prisma.ticket.create({
        data: {
            ticketTypeId: typeId,
            enrollmentId: id,
            status: "RESERVED"

        }
    })
    
}

const ticketsRepository = {
    getAllTicketsTypes,
    getAllTickets,
    getEnrollmentId,
    postTicket
}

export default ticketsRepository;