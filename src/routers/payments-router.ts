import { Router } from "express";

const ticketsRouter  = Router();

ticketsRouter.get("/tickets/types");
ticketsRouter.get("/tickets");
ticketsRouter.post("tickets");

export { ticketsRouter };