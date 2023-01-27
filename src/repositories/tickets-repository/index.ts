import { prisma } from "@/config";

async function getAllTicketsTypes() {

    return prisma.ticketType.findMany()
}

async function getAllTickets() {
    
    return prisma.ticket.findMany({

        include: {
            TicketType: true
        }
    })
}

const ticketsRepository = {
    getAllTicketsTypes,
    getAllTickets
}

export default ticketsRepository;