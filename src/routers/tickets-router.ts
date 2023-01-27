import { authenticateToken } from "@/middlewares";
import { getTickets, getTicketsTypes, reserveTickets } from "@/controllers/tickets-controller";
import { Router } from "express";

const ticketsRouter  = Router();

ticketsRouter.get("/types", authenticateToken, getTicketsTypes);
ticketsRouter.get("/", authenticateToken, getTickets);
ticketsRouter.post("/", authenticateToken, reserveTickets);

export { ticketsRouter };