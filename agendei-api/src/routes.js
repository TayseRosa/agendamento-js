import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctors.js";

const router = Router();

router.get("/doctors", controllerDoctors.Listar);

export default router;