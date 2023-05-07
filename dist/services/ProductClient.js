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
const ApiClient_1 = require("./ApiClient");
class ProductClient {
    constructor() {
        this.BASE_URL = "http://localhost:8080/api/v1/product/";
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, ApiClient_1.fetchJson)(this.BASE_URL, "POST", product);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = "GET";
            const url = `${this.BASE_URL}?id=${id}`;
            try {
                return yield (0, ApiClient_1.fetchJson)(url, method);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, ApiClient_1.fetchJson)(this.BASE_URL, "PUT", product);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.BASE_URL}delete?id=${id}`;
            try {
                return yield (0, ApiClient_1.fetchJson)(url, "DELETE");
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.default = ProductClient;
//# sourceMappingURL=ProductClient.js.map