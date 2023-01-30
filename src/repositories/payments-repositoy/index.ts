import { prisma } from "@/config";


async function getTicketsPaymentsById() {
    
    return await prisma.payment.findMany({
        where: 
    })
}

export const paymentsRepository = {
    getTicketsPaymentsById
}

