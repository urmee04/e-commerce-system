import { Product } from "../models/product";
export function calculateDiscount(
  price: number,
  discountPercentage: number
): number {
  if (price < 0) throw new Error("Price must be positive");
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Dscount percentage value must be between 0 and 100");
  }
  return (price * discountPercentage) / 100;
}

//calculate discount for a product instance
export function calculateProductDiscount(product: Product): number {
  return calculateDiscount(product.price, product.discountPercentage);
}
