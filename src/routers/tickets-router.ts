import { authenticateToken } from "@/middlewares";
import { getTickets, getTicketsTypes } from "@/controllers/tickets-controller";
import { Router } from "express";

const ticketsRouter  = Router();

ticketsRouter.get("/types", authenticateToken, getTicketsTypes);
ticketsRouter.get("/", authenticateToken, getTickets);
//ticketsRouter.post("tickets");

export { ticketsRouter };