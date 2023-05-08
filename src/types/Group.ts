import { GroupType } from "../enums/GroupType"
import { Account } from "./Account"
import { Listing } from "./Listing"

export interface Group{
    id: string,
    name: string,
    groupType: GroupType,
    listings: Listing[]
    owner: Account
    accounts: Account[]
}