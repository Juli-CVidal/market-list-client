import { Account } from "../types/Account";
import { ApiRequest } from "../types/ApiRequest";
import { CrudApiClient } from "./impls/CrudApiClient";
import { ICrudApiClient } from "./interfaces/ICrudApiClient";

export class AccountClient {
  private readonly crudClient: ICrudApiClient<Account>;

  constructor(private readonly BASE_URL: string) {
    this.crudClient = new CrudApiClient<Account>(`${BASE_URL}/account/`);
  }

  async createAccount(
    product: Account
  ): Promise<ApiRequest<Account> | undefined> {
    return await this.crudClient.create(product);
  }

  async getAccount(id: string): Promise<ApiRequest<Account> | undefined> {
    return await this.crudClient.get(id);
  }

  async updateAccount(
    product: Account
  ): Promise<ApiRequest<Account> | undefined> {
    return await this.crudClient.update(product);
  }

  async deleteAccount(id: string): Promise<ApiRequest<Account> | undefined> {
    return await this.crudClient.delete(id);
  }
}
