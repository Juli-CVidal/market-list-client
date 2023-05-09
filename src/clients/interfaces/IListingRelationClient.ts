import { ApiRequest } from "../../types/ApiRequest";
import { Listing } from "../../types/Listing";

export interface IListingRelationClient {
    addProductToListing(listingId: string, productId: string): Promise<ApiRequest<Listing> | undefined>;
    removeProductFromListing(listingId: string, productId: string): Promise<ApiRequest<Listing> | undefined>;
}