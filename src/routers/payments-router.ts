import { getTicket } from "@/controllers/payments-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const paymentsRouter  = Router();

paymentsRouter.all("/*", authenticateToken)
paymentsRouter.get("/", getTicket);
//paymentsRouter.post("/process");

export { paymentsRouter };