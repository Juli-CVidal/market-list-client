import { fetchFromApi } from "../../services/FetchFromApi";
import { ApiRequest } from "../../types/ApiRequest";
import { Group } from "../../types/Group";
import { IGroupRelationClient } from "../interfaces/IGroupRelationClient";

export class GroupRelationManagement implements IGroupRelationClient {
  constructor(private readonly BASE_URL: string) {}

  async transferOwnership(
    groupId: string,
    newOwnerId: string
  ): Promise<ApiRequest<Group> | undefined> {
    const URL = `${this.BASE_URL}transfer?groupId=${groupId}&newOwnerId=${newOwnerId}`;
    return await this.makeFetch(URL);
  }

  async addAccountToGroup(
    groupId: string,
    accountId: string
  ): Promise<ApiRequest<Group> | undefined> {
    const URL = `${this.BASE_URL}addAccount?groupId=${groupId}&accountId=${accountId}`;
    return await this.makeFetch(URL);
  }

  async removeAccountFromGroup(
    groupId: string,
    accountId: string
  ): Promise<ApiRequest<Group> | undefined> {
    const URL = `${this.BASE_URL}removeAccount?groupId=${groupId}&accountId=${accountId}`;
    return await this.makeFetch(URL);
  }

  async addListingToGroup(
    groupId: string,
    listingId: string
  ): Promise<ApiRequest<Group> | undefined> {
    const URL = `${this.BASE_URL}addListing?groupId=${groupId}&listingId=${listingId}`;
    return await this.makeFetch(URL);
  }

  async removeListingFromGroup(
    groupId: string,
    listingId: string
  ): Promise<ApiRequest<Group> | undefined> {
    const URL = `${this.BASE_URL}removeListing?groupId=${groupId}&listingId=${listingId}`;
    return await this.makeFetch(URL);
  }

  private async makeFetch(URL: string): Promise<ApiRequest<Group> | undefined> {
    return await fetchFromApi(URL, "PUT").then((res) => res.json());
  }
}
