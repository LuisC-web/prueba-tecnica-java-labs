import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

interface IUser {
  id: number;
  name: string;
  email: string;
  created_at?: Date;
}
export class User extends Model<IUser> implements IUser {
  public id!: number;
  public name!: string;
  public email!: string;
  public created_at!: Date;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false,
  }
);
