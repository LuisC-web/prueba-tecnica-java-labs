import { Router } from "express";
import { body } from "express-validator";
import { UsersController } from "../controllers/UsersController";
import handleInputError from "../middleware/validation";

const usersRoutes = Router();

usersRoutes.post(
  "/",
  body("name").notEmpty().withMessage("No puede ir vacio"),
  body("email").isEmail().withMessage("No es un email válido"),
  handleInputError,
  UsersController.createUser
);
usersRoutes.get("/", UsersController.getUsers);

usersRoutes.get("/", UsersController.getUsers);

export default usersRoutes;
