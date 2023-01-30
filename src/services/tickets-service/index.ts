import { notFoundError } from "@/errors";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketsRepository from "@/repositories/tickets-repository";
import { BAD_REQUEST } from "http-status";

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
    
    const { id } = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!id) throw notFoundError();
    const ticket = await ticketsRepository.postTicket(id, typeId);
    if (!ticket) throw notFoundError();
    return ticket;
}