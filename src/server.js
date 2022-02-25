import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${3000}`);
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("BD SINCRONIZADA   ✔✔✔✔✔✔✔✔✔");
  } catch (error) {
    console.log("error ❌❌❌❌❌❌", error);
  }
});
