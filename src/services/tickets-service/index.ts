import { notFoundError } from "@/errors";
import ticketsRepository from "@/repositories/tickets-repository";

export async function getAllTypesTickets() {

    const ticketsTypes = await ticketsRepository.getAllTicketsTypes();
    if (!ticketsTypes) throw notFoundError();
    return ticketsTypes;
}