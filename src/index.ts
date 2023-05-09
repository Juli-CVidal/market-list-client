import { Measure } from "./enums/Measure";
import { Product } from "./types/Product";
import { ProductClient } from "./clients/ProductClient";

const BASE_URL = "http://localhost:8080/api/v1";

const trial: Product = {
  name: "Harina",
  description: "Harina 0000",
  measure: Measure.KGS,
  quantity: 1,
  preferredQuantity: 2,
};

const productClient: ProductClient = new ProductClient(BASE_URL);

async function tryConnection() {
  //const entity = await productClient.createProduct(trial);
  const entity =  await productClient.getProduct("402881ac87f8df590187f8e0e57d0000")
  console.log(entity);
}

tryConnection();
