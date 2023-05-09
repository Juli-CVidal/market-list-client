import { ApiRequest } from "../types/ApiRequest";
import { Listing } from "../types/Listing";
import { CrudApiClient } from "./impls/CrudApiClient";
import { ListingRelationManagement } from "./impls/ListingRelationManagement";
import { ICrudApiClient } from "./interfaces/ICrudApiClient";
import { IListingRelationClient } from "./interfaces/IListingRelationClient";

export class ListingClient {
  private readonly crudClient: ICrudApiClient<Listing>;

  private readonly relationClient: IListingRelationClient;

  constructor(private readonly BASE_URL: string) {
    this.crudClient = new CrudApiClient<Listing>(`${BASE_URL}/listing/`);
    this.relationClient = new ListingRelationManagement(`${BASE_URL}/listing/`);
  }

  async createListing(
    listing: Listing
  ): Promise<ApiRequest<Listing> | undefined> {
    return await this.crudClient.create(listing);
  }

  async getListing(id: string): Promise<ApiRequest<Listing> | undefined> {
    return await this.crudClient.get(id);
  }

  async updateListing(
    listing: Listing
  ): Promise<ApiRequest<Listing> | undefined> {
    return await this.crudClient.update(listing);
  }

  async deleteListing(id: string): Promise<ApiRequest<Listing> | undefined> {
    return await this.crudClient.delete(id);
  }

  async addProductToListing(
    listingId: string,
    productId: string
  ): Promise<ApiRequest<Listing> | undefined> {
    return await this.relationClient.addProductToListing(listingId, productId);
  }

  async removeProductFromListing(
    listingId: string,
    productId: string
  ): Promise<ApiRequest<Listing> | undefined> {
    return await this.relationClient.removeProductFromListing(
      listingId,
      productId
    );
  }
}
