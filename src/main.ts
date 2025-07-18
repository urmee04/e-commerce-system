import { Product } from "./models/product";
import { fetchProductData } from "./services/apiService";
import { handleError } from "./utils/errorHandler";

// Async function to load and display products
async function main(): Promise<void> {
  try {
    // Fetch raw product data from API
    const productData = await fetchProductData();

    // Convert raw data into instances of Product class
    const products = productData.map((data) => {
      return new Product(
        data.id,
        data.title,
        data.description,
        data.price,
        data.discountPercentage,
        data.category
      );
    });
    // Display product details with calculated tax
    products.forEach((product) => {
      const tax = product.getTaxAmount();
      const finalPrice = product.getFinalPrice();

      console.log(product.displayDetails());
      console.log(`Tax: $${tax.toFixed(2)}`);
      console.log(`Final Price (with tax): $${finalPrice.toFixed(2)}`);
    });
  } catch (error) {
    //handle any errors using centralized error handler
    handleError(error);
  }
}

main();
