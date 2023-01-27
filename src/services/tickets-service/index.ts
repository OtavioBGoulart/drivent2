import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";

export async function getAllTypesTickets() {

    const ticketsTypes = await ticketsRepository.getAllTicketsTypes();
    if (!ticketsTypes) throw notFoundError();
    return ticketsTypes;
}

export async function getTicketsService(userId: number) {

    const tickets = await ticketsRepository.getAllTickets(userId);
    console.log("aaaa", tickets);
    if (!tickets) throw notFoundError();
    return tickets
}

export async function postMyTicket(userId: number, typeId: number) {
    
    const { id } = await ticketsRepository.getEnrollmentId(userId);
    if (!id) throw notFoundError();
    const ticketReserve = await ticketsRepository.postTicket(id, typeId);
    const ticketId = ticketReserve.id
    console.log("ticketTyype", ticketReserve);
    const ticket = await ticketsRepository.getMyCurrentTicket(ticketId)
    console.log("ticket",ticket);
    return ticket;
}