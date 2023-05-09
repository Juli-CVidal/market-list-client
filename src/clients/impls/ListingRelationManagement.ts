import { fetchFromApi } from "../../services/FetchFromApi";
import { ApiRequest } from "../../types/ApiRequest";
import { Listing } from "../../types/Listing";
import { Product } from "../../types/Product";
import { IListingRelationClient } from "../interfaces/IListingRelationClient";

export class ListingRelationManagement implements IListingRelationClient {
  constructor(private readonly BASE_URL: string) {}

    async addProductToListing(listingId: string, productId: string): Promise<ApiRequest<Listing> | undefined> {
        const URL = `${this.BASE_URL}addProduct?listingId=${listingId}&productId=${productId}`
        return await this.makeFetch(URL);
    }
    
    async removeProductFromListing(listingId: string, productId: string): Promise<ApiRequest<Listing> | undefined> {
        const URL = `${this.BASE_URL}removeProduct?listingId=${listingId}&productId=${productId}`
        return await this.makeFetch(URL);
    }

    private async makeFetch(URL: string): Promise<ApiRequest<Listing> | undefined> {
        return await fetchFromApi(URL,"PUT").then(res => res.json());
    }
}
