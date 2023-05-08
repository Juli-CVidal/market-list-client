import { ApiRequest } from "../types/ApiRequest";
import { Product } from "../types/Product";
import { DefaultApiClient } from "./DefaultApiClient";
import { IApiClient } from "./IApiClient";

export class ProductClient {
  private readonly apiClient: IApiClient<Product>;

  constructor(private readonly BASE_URL: string) {
    this.apiClient = new DefaultApiClient<Product>(`${BASE_URL}/product/`);
  }

  async createProduct(
    product: Product
  ): Promise<ApiRequest<Product> | undefined> {
    return await this.apiClient.create(product);
  }

  async getProduct(id: string): Promise<ApiRequest<Product> | undefined> {
    return await this.apiClient.get(id);
  }

  async updateProduct(
    product: Product
  ): Promise<ApiRequest<Product> | undefined> {
    return await this.apiClient.update(product);
  }

  async deleteProduct(id: string): Promise<ApiRequest<Product> | undefined> {
    return await this.apiClient.delete(id);
  }
}
