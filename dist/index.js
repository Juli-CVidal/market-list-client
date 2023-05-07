"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function tryConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const entity = yield productClient.deleteProduct("402881ac87f7ec920187f7ed5fc20000");
        console.log(entity);
    });
}
tryConnection();
//# sourceMappingURL=index.js.map