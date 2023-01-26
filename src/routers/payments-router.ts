import { Router } from "express";

const paymentsRouter  = Router();

paymentsRouter.get("/payments");
paymentsRouter.post("payments/process");

export { paymentsRouter };