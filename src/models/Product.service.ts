import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import Errors, {HttpCode, Message} from "../libs/Errors";
import ProductModel from "../schema/Product.model";
import { shapeIntoMongooseObjectId } from "../libs/config";

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


    public async updateChosenProduct(
        id: string,
        input: ProductUpdateInput
    ): Promise<Product> {
        id = shapeIntoMongooseObjectId(id);
        const result = await this.productModel.findByIdAndUpdate({_id:id}, input, 
            {new: true})
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UP_FAIL);

        console.log(result);
        return result;
    }

}

export default ProductService;