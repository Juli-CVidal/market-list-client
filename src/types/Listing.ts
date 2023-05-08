import { Group } from "./Group"
import { Product } from "./Product"


export interface Listing{
    id: string,
    name: string,
    group: Group,
    products: Product[]
}
