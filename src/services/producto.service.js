import { Producto } from "../models/producto.model";

export class ProductoService {
  static async crear(data) {
    try {
      const nuevoProducto = await Producto.create(data);
      return nuevoProducto;
    } catch (error) {
      return {
        message: error.error,
      };
    }
  }
}
