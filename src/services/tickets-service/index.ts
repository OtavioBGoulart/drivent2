import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";

export async function getAllTypesTickets() {

    const ticketsTypes = await ticketsRepository.getAllTicketsTypes();
    if (!ticketsTypes) throw notFoundError();
    return ticketsTypes;
}

export async function getTicketsService(userId: number) {

    const tickets = await ticketsRepository.getAllTickets(userId);
    if (!tickets) throw notFoundError();
    return tickets
}

export async function postMyTicket(userId: number, typeId: number) {
    
    const { id } = await ticketsRepository.getEnrollmentId(userId)
    const ticket = await ticketsRepository.postTicket(id, typeId)
    return ticket
}