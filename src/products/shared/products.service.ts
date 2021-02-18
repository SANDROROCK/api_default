import { Injectable } from '@nestjs/common';
import { Products } from './products';

@Injectable()
export class ProductsService {
  products: Products[] = [
    { id: 1, description: 'Camisa Polo', und: 'un', price: 6.87 },
    { id: 2, description: 'Camisa Regata', und: 'un', price: 15.87 },
    { id: 3, description: 'Bermuda Jeans', und: 'un', price: 18.87 },
    { id: 4, description: 'Calca social', und: 'un', price: 4.87 },
    { id: 5, description: 'Calça Jeans', und: 'un', price: 19.0 },
  ];

  getAll() {
    return this.products;
  }

  getById(id: number) {
    const product = this.products.filter((value) => (value.id = id));
    return product;
  }

  create(product: Products) {};

  update(product: Products, id: number) {};

  delete(id: number) {};
}
