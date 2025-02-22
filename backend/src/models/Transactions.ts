import { DataTypes, Model } from "sequelize";
import { User } from "./Users";
import { sequelize } from "../config/db";
export interface ITransaction {
  id: number;
  user_id: number;
  amount: number;
  type: "deposit" | "withdrawal";
  created_at?: Date;
}
// Definir modelo con Sequelize y TypeScript
export class Transaction extends Model<ITransaction> implements ITransaction {
  public id!: number;
  public user_id!: number;
  public amount!: number;
  public type!: "deposit" | "withdrawal";
  public created_at!: Date;
}
// Inicializar modelo en Sequelize
Transaction.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    type: { type: DataTypes.ENUM("deposit", "withdrawal"), allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: "transactions",
    timestamps: false,
  }
);
// Definir relación
Transaction.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
User.hasMany(Transaction, { foreignKey: "user_id" });
