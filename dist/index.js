"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Measure_1 = require("./enums/Measure");
const ProductClient_1 = __importDefault(require("./services/ProductClient"));
const trial = {
    name: "Harina",
    description: "Harina 0000",
    measure: Measure_1.Measure.KGS,
    quantity: 1,
    preferredQuantity: 2
};
const productClient = new ProductClient_1.default();
productClient.createProduct(trial);
//# sourceMappingURL=index.js.map