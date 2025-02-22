import type { Request, Response } from "express";
import { User } from "../models/Users";
export class UsersController {
  static async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const userExist = await User.findOne({ where: { email } });
      if (userExist) {
        res.status(409).send({ msg: "El usuario ya existe" });
        return;
      }
      await User.create({ name, email });

      res.send({
        msg: "Usuario creado con éxito",
      });
      return;
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ msg: error.message });
      return;
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();

      res.json(users);
      return;
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: error.message });
      return;
    }
  }
}
