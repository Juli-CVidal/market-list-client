import { Measure } from "../enums/Measure";

export interface Product {
    id?: string;
    name: string;
    description?: string;
    image?: string;
    lastModification?: string;
    measure: Measure;
    quantity: number
    preferredQuantity: number
  }