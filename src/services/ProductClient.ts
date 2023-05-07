import { ApiRequest } from "../interfaces/ApiRequest";
import { Product } from "../interfaces/Product";
import { fetchJson } from "./ApiClient";

class ProductClient {
  readonly BASE_URL: string = "http://localhost:8080/api/v1/product/";

  async createProduct(
    product: Product
  ): Promise<ApiRequest<Product> | undefined> {
    try {
      return await fetchJson(this.BASE_URL, "POST", product);
    } catch (error) {
      console.error(error);
      // TODO: here I can just send an SweetAlert or something to let the user know what's happening
    }
  }

  async getProduct(id: string): Promise<ApiRequest<Product> | undefined> {
    const method: string = "GET";
    const url: string = `${this.BASE_URL}?id=${id}`;
    try {
      return await fetchJson(url, method);
    } catch (error) {
      console.log(error);
      // TODO: here I can just send an SweetAlert or something to let the user know what's happening
    }
  }

  async updateProduct(
    product: Product
  ): Promise<ApiRequest<Product> | undefined> {
    try {
      return await fetchJson(this.BASE_URL, "PUT", product);
    } catch (error) {
      console.error(error);
      // TODO: here I can just send an SweetAlert or something to let the user know what's happening
    }
  }

  async deleteProduct(
    id: string
  ): Promise<ApiRequest<Product> | undefined>  {
    const url: string = `${this.BASE_URL}delete?id=${id}`;
    try {
      return await fetchJson(url,"DELETE");
    } catch (error) {
      console.error(error);
      // TODO: here I can just send an SweetAlert or something to let the user know what's happening
    }
  }
}

export default ProductClient;
