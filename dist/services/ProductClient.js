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
Object.defineProperty(exports, "__esModule", { value: true });
class ProductClient {
    constructor() {
        this.BASE_URL = "http://localhost:8080/api/v1/product/";
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            };
            const response = yield fetch(this.BASE_URL, options);
            if (!response.ok) {
                console.error(response.status);
            }
            else {
                console.log(yield response.json());
            }
        });
    }
}
exports.default = ProductClient;
//# sourceMappingURL=ProductClient.js.map