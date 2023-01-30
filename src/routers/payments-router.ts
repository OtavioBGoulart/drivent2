import { getTicket, sendPayment } from "@/controllers/payments-controller";
import { authenticateToken, validateBody } from "@/middlewares";
import { paymentSchema } from "@/schemas/payment-schema";
import { Router } from "express";

const paymentsRouter  = Router();

paymentsRouter.all("/*", authenticateToken)
paymentsRouter.get("/", getTicket);
paymentsRouter.post("/process", validateBody(paymentSchema), sendPayment);

export { paymentsRouter };