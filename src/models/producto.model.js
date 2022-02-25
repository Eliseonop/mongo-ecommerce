import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    required: true,
    maxlength: 15,
  },
  precio: {
    type: mongoose.Schema.Types.Decimal128,
    default: 0.5,
    max: 100.0,
  },
  genero: {
    type: mongoose.Schema.Types.String,
    enum: ["MASCULINO", "FEMENINO", "UNISEX"],
    default: "UNISEX",
  },
  estado: mongoose.Schema.Types.Boolean,
  categoriaProducto: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

export const Producto = mongoose.model("productos", productoSchema);
