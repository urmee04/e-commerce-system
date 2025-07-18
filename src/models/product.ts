import { calculateTax } from "../utils/taxCalculator";

export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    category: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
  }

  //Calculates and returns the price after applying discount

  getPriceWithDiscount(): number {
    return this.price * (1 - this.discountPercentage / 100);
  }

  // calculate tax amount using utility function
  getTaxAmount(): number {
    return calculateTax(this.price, this.category);
  }

  //calculates final price after discount and tax
  getFinalPrice(): number {
    return this.getPriceWithDiscount() + this.getTaxAmount();
  }

  //Display product's details in formatted string

  displayDetails(): string {
    return `ID: ${this.id}
    Title: ${this.title}
    Price: $${this.price.toFixed(2)}
    Discount: ${this.discountPercentage}%
    Discounted Price: $${this.getPriceWithDiscount().toFixed(2)}
    Category: ${this.category}`;
  }
}
