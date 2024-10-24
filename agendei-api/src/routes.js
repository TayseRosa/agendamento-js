import { Router } from "express";
import controllerDoctors from "./controllers/controller.doctors.js";
import controllerUser from "./controllers/controller.user.js";

const router = Router();

//Doctors
router.get("/doctors", controllerDoctors.Listar);
router.post("/doctors", controllerDoctors.Inserir);
router.put("/doctors/:id_doctor", controllerDoctors.Editar);
router.delete("/doctors/:id_doctor", controllerDoctors.Excluir);

//Users
router.get("/users", controllerUser.Listar)
router.post("/users/register", controllerUser.Inserir)
router.post("/users/login", controllerUser.Login)

//Reservas(Appointments)

//Serviços(Services)

export default router;