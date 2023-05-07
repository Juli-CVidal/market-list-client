import { Measure } from "./enums/Measure"
import { ApiRequest } from "./interfaces/ApiRequest";
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

async function tryConnection() {
    //const entity = await productClient.createProduct(trial);
    const entity =  await productClient.deleteProduct("402881ac87f7ec920187f7ed5fc20000")
    console.log(entity)
}

tryConnection()