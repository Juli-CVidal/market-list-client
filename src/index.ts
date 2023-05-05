import { Measure } from "./enums/Measure"
import { Product } from "./interfaces/Product"
import ProductClient from "./services/ProductClient"

const trial: Product = {
    name: "Harina",
    description: "Harina 0000",
    measure: Measure.KGS,
    quantity: 1,
    preferredQuantity: 2
}

const productClient: ProductClient = new ProductClient();

productClient.createProduct(trial)
