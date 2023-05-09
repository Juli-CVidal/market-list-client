import { ApiRequest } from "../types/ApiRequest";
import { Product } from "../types/Product";
import { CrudApiClient } from "./impls/CrudApiClient";
import { ICrudApiClient } from "./interfaces/ICrudApiClient";

export class ProductClient {
  private readonly crudClient: ICrudApiClient<Product>;

  constructor(private readonly BASE_URL: string) {
    this.crudClient = new CrudApiClient<Product>(`${BASE_URL}/product/`);
  }

  async createProduct(
    product: Product
  ): Promise<ApiRequest<Product> | undefined> {
    return await this.crudClient.create(product);
  }

  async getProduct(id: string): Promise<ApiRequest<Product> | undefined> {
    return await this.crudClient.get(id);
  }

  async updateProduct(
    product: Product
  ): Promise<ApiRequest<Product> | undefined> {
    return await this.crudClient.update(product);
  }

  async deleteProduct(id: string): Promise<ApiRequest<Product> | undefined> {
    return await this.crudClient.delete(id);
  }
}
