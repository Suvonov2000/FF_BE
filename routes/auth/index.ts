import Router from "express";
import { sign_in, sign_up } from "../../controllers/auth";

const router = Router();

router.post("/sign-up",sign_up)

router.post("/sign_in",sign_in)

export default router 