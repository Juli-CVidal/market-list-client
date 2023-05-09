import { ApiRequest } from "../types/ApiRequest";
import { Group } from "../types/Group";
import { CrudApiClient } from "./impls/CrudApiClient";
import { GroupRelationManagement } from "./impls/GroupRelationManagement";
import { ICrudApiClient } from "./interfaces/ICrudApiClient";
import { IGroupRelationClient } from "./interfaces/IGroupRelationClient";

export class GroupClient {
  private readonly crudClient: ICrudApiClient<Group>;

  private readonly relationClient: IGroupRelationClient;

  constructor(private readonly BASE_URL: string) {
    this.crudClient = new CrudApiClient<Group>(`${BASE_URL}/group/`);
    this.relationClient = new GroupRelationManagement(`${BASE_URL}/group/`);
  }

  async createGroup(group: Group): Promise<ApiRequest<Group> | undefined> {
    return await this.crudClient.create(group);
  }

  async getGroup(id: string): Promise<ApiRequest<Group> | undefined> {
    return await this.crudClient.get(id);
  }

  async updateGroup(group: Group): Promise<ApiRequest<Group> | undefined> {
    return await this.crudClient.update(group);
  }

  async deleteGroup(id: string): Promise<ApiRequest<Group> | undefined> {
    return await this.crudClient.delete(id);
  }

  async transferOwnership(
    groupId: string,
    newOwnerId: string
  ): Promise<ApiRequest<Group> | undefined> {
    return await this.relationClient.transferOwnership(groupId, newOwnerId);
  }

  async addAccountToGroup(
    groupId: string,
    accountId: string
  ): Promise<ApiRequest<Group> | undefined> {
    return await this.relationClient.addAccountToGroup(groupId, accountId);
  }

  async removeAccountFromGroup(
    groupId: string,
    accountId: string
  ): Promise<ApiRequest<Group> | undefined> {
    return await this.relationClient.removeAccountFromGroup(groupId, accountId);
  }

  async addListingToGroup(
    groupId: string,
    listingId: string
  ): Promise<ApiRequest<Group> | undefined> {
    return await this.relationClient.addListingToGroup(groupId, listingId);
  }

  async removeListingFromGroup(
    groupId: string,
    listingId: string
  ): Promise<ApiRequest<Group> | undefined> {
    return await this.relationClient.removeListingFromGroup(groupId, listingId);
  }
}
