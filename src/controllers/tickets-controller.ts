import { AuthenticatedRequest } from "@/middlewares";
import { getAllTypesTickets, getTicketsService, postMyTicket } from "@/services/tickets-service";
import { Request, Response } from "express";
import httpStatus from "http-status";


export async function getTicketsTypes(req: Request, res: Response) {

    try {
        const ticketsTypes = await getAllTypesTickets();
        return res.status(httpStatus.OK).send(ticketsTypes);
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send({});
    }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId;
    
    try {
        const tickets = await getTicketsService(userId);
        return res.status(httpStatus.OK).send(tickets);
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send({})
    }
}

export async function reserveTickets(req: AuthenticatedRequest, res: Response) {
    const userId = req.userId;
    const typeId = req.body.ticketTypeId;
    if (!req.body.ticketTypeId) return res.sendStatus(httpStatus.BAD_REQUEST);

    try {
        const ticket = await postMyTicket(userId, typeId);
        return res.status(httpStatus.CREATED).send(ticket);
    } catch(error) {
            return res.status(httpStatus.NOT_FOUND).send({});
       
    }
    
}

