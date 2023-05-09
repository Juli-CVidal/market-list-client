import { ApiRequest } from "../../types/ApiRequest";
import { Group } from "../../types/Group";

export interface IGroupRelationClient {
  transferOwnership(
    groupId: string,
    newOwnerId: string
  ): Promise<ApiRequest<Group> | undefined>;

  addAccountToGroup(
    groupId: string,
    accountId: string
  ): Promise<ApiRequest<Group> | undefined>;

  removeAccountFromGroup(
    groupId: string,
    accountId: string
  ): Promise<ApiRequest<Group> | undefined>;

  addListingToGroup(
    groupId: string,
    listingId: string
  ): Promise<ApiRequest<Group> | undefined>;

  removeListingFromGroup(
    groupId: string,
    listingId: string
  ): Promise<ApiRequest<Group> | undefined>;
}
