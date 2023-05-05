import { Product } from "../interfaces/Product";

class ProductClient {
  readonly BASE_URL: string = "http://localhost:8080/api/v1/product/";

  async createProduct(product: Product) {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };

    const response = await fetch(this.BASE_URL, options);
    if (!response.ok) {
      console.error(response.status);
    } else {
      console.log(await response.json());
    }
  }
}

export default ProductClient