/*Create API requests using async/await and Promises.
 **Implement functions to fetch product data and handle errors using try/catch.
 */

export async function fetchProductData(): Promise<any[]> {
  try {
    //send a GET request to the product API
    const response = await fetch("https://dummyjson.com/products");
    //check if the response was successfull
    if (!response.ok) {
      //throw an error if the http staus is not okay
      throw new Error("Network response was not okay");
    }

    //parse the response body as json
    const apiData = await response.json();

    //validate that the products field exists and is an array
    if (!apiData || !Array.isArray(apiData.products)) {
      throw new Error("Invalid product data structure");
    }
    //return the array of products
    return apiData.products;
  } catch (error) {
    //log any errors that occur during the fetch or parsing
    console.error("Fetch error:", error);
    return [];
  }
}
