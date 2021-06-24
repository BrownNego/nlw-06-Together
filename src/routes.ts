import { Router } from "express";
import { CreateuserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateuserController();

router.post("/users", createUserController.handle)



export { router }