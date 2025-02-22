import { Router } from "express";
import { body, param } from "express-validator";
import { TransactionsController } from "../controllers/TransactionsController";
import handleInputError from "../middleware/validation";

const transactionsRoutes = Router();
transactionsRoutes.post(
  "/",
  body("user_id").isInt().withMessage("El id no es válido"),
  body("amount")
    .isNumeric()
    .isFloat({ gt: 0 })
    .withMessage("El monto no es válido"),
  body("type")
    .notEmpty()
    .withMessage("La descripción del proyecto es requerido"),

  body("type")
    .isIn(["deposit", "withdrawal"])
    .withMessage("El type no es un tipo válido"),
  handleInputError,
  TransactionsController.createTransaction
);

transactionsRoutes.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputError,
  TransactionsController.getTransaction
);
transactionsRoutes.delete("/", TransactionsController.deleteTransaction);

export default transactionsRoutes;
