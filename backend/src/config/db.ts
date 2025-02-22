import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // ⚠️ Solo si no tienes un certificado CA válido
    },
  },
  logging: false,
});

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión exitosa a PostgreSQL");

    // Sincronizar modelos automáticamente
    await sequelize.sync({ alter: true });
    console.log("📌 Tablas sincronizadas");
  } catch (error) {
    console.error("❌ Error al conectar:", error.message);
    setTimeout(() => {
      console.log("🔄Reintentando conexión a la base de datos...\r");
      connectToDatabase();
    }, 5000);
  }
}
