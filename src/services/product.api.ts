import { Product } from '../models/product.model';

export function getProductById(id: Product['id']): Promise<Product> {
  return window
    .fetch(`https://api.mercadolibre.com/products/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('No se encontró el producto');
      }
      return res.json();
    })
    .then((json) => {
      const { id, name, attributes, pictures } = json;

      // TODO type checking
      return { id, name, attributes, pictures };
    });
}
