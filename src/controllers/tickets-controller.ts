import { getAllTypesTickets, getTicketsService } from "@/services/tickets-service";
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

export async function getTickets(req: Request, res: Response) {
    //const user = req.userId;

    try {
        const tickets = await getTicketsService();
        return res.status(httpStatus.OK).send(tickets);
    } catch (error) {
        return res.send(httpStatus.NOT_FOUND).send({})
    }
}

