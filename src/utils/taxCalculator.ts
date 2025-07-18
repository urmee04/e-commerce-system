export function calculateTax(price: number, category: string): number {
  //Throw an error if the product price is negative
  if (price < 0) throw new Error("Price must be positive");
  //Apply 3% tax if the category is 'groceries', otherwise apply 4.75% for all other categories
  const taxRate = category.toLowerCase() === "groceries" ? 0.03 : 0.0475;
  //Return the tax amount based on the price and selected tax rate
  return price * taxRate;
}
