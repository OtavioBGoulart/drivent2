import { AuthenticatedRequest } from "@/middlewares";
import { getTicketPaymentService } from "@/services/payments-service";
import { Response } from "express";
import httpStatus from "http-status";



export async function getTicket(req: AuthenticatedRequest, res: Response) {
    const ticketId = req.query.ticketId as (string);
    if (!ticketId) return res.sendStatus(400);
    const id = req.userId;

    try {
        const ticketPayment = await getTicketPaymentService(ticketId, id)
        return res.status(httpStatus.OK).send(ticketPayment);
    } catch (error) {
        console.log(error)
        if (error.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send({})
        }
        if (error.name === "UnauthorizedError") {
            return res.status(httpStatus.UNAUTHORIZED).send({})
        }
    }
}