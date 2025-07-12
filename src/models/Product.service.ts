import { Product, ProductInput } from "../libs/types/product";
import Errors, {HttpCode, Message} from "../libs/Errors";
import ProductModel from "../schema/Product.model";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    /** SPA */


    /** SSR */

    public async createNewProduct(input: ProductInput): Promise<Product>{
    try {
        return await this.productModel.create(input);
       }catch (err) {
        console.error("error", err)
        throw new Errors(HttpCode.BAD_REQUEST, Message.CR_FAIL);
       }
    }


}

export default ProductModel;