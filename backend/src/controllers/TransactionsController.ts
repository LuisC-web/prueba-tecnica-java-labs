import { Request, Response } from "express";
import { User } from "../models/Users";
import { ITransaction, Transaction } from "../models/Transactions";
import { sequelize } from "../config/db";
export class TransactionsController {
  static async createTransaction(
    req: Request<{}, {}, Pick<ITransaction, "user_id" | "amount" | "type">>,
    res: Response
  ) {
    try {
      const { user_id, amount, type } = req.body;
      const userExist = await User.findByPk(user_id);
      if (!userExist) {
        res.status(409).send({ msg: "El usuario no existe" });
        return;
      }
      console.log(type);

      if (type === "withdrawal") {
        const transactions = await Transaction.findAll({ where: { user_id } });
        console.log(`transactions: ${transactions}`);

        const sumTransactionTotal = transactions.reduce(
          (accumulator, transaction) =>
            accumulator +
            (transaction.get("type") === "withdrawal"
              ? -+transaction.get("amount")
              : +transaction.get("amount")),
          0
        );
        console.log(`Saldo actual: ${sumTransactionTotal}`);

        if (sumTransactionTotal < amount) {
          res.status(402).json({ msg: "Fondos insuficientes" });
          return;
        }
      }
      const transaction = new Transaction({ user_id, amount, type });
      await transaction.save();
      res.status(200).json({ msg: "Transacion creada" });
      return;
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ msg: error.message });
      return;
    }
  }
  static async getTransaction(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id, {
        include: [{ model: Transaction }],
      });

      if (!user) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
      }

      res.status(200).json(user);
      return;
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Erro al crear un proyecto" });
      return;
    }
  }
  static async deleteTransaction(req: Request, res: Response) {
    try {
      const t = await sequelize.transaction(); // Iniciar transacción

      await Transaction.destroy({ where: {}, transaction: t }); // Eliminar todas las transacciones
      await t.commit(); // Confirmar cambios
      res.status(200).json({ msg: "Eliminar transaciones" });
      return;
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ msg: error.message });
      return;
    }
  }
}
