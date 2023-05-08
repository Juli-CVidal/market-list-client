import { ApiRequest } from "../types/ApiRequest";
import { fetchFromApi } from "./FetchFromApi";
import { IApiClient } from "./IApiClient";

export class DefaultApiClient<T> implements IApiClient<T> {
  constructor(private readonly BASE_URL: string) {}

  async create(entity: T): Promise<ApiRequest<T> | undefined> {
    return await fetchFromApi(this.BASE_URL, "POST", entity).then((res) =>
      res.json()
    );
  }

  async get(id: string): Promise<ApiRequest<T> | undefined> {
    const URL: string = `${this.BASE_URL}?id=${id}`;
    return await fetchFromApi(URL, "GET").then((res) => res.json());
  }

  async update(entity: T): Promise<ApiRequest<T> | undefined> {
    return await fetchFromApi(this.BASE_URL, "PUT", entity).then((res) =>
      res.json()
    );
  }

  async delete(id: string): Promise<ApiRequest<T> | undefined> {
    const URL: string = `${this.BASE_URL}delete?id=${id}`;
    return await fetchFromApi(URL, "DELETE").then((res) => res.json());
  }
}
