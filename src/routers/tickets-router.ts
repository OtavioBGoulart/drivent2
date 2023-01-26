import { authenticateToken } from "@/middlewares";
import { getTicketsTypes } from "@/controllers/tickets-controller";
import { Router } from "express";

const ticketsRouter  = Router();

ticketsRouter.get("/types", authenticateToken, getTicketsTypes);
//ticketsRouter.get("/tickets");
//ticketsRouter.post("tickets");

export { ticketsRouter };