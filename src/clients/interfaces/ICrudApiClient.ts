import { ApiRequest } from "../../types/ApiRequest";

export interface ICrudApiClient<T> {
  create(entity: T): Promise<ApiRequest<T> | undefined>;

  get(id: string): Promise<ApiRequest<T> | undefined>;

  update(entity: T): Promise<ApiRequest<T> | undefined>;

  delete(id: string): Promise<ApiRequest<T> | undefined>;
}
