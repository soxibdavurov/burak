import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import Errors, {HttpCode, Message} from "../libs/Errors";
import ProductModel from "../schema/Product.model";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/products.enum";
import { T } from "../libs/types/common";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    /** SPA */
public async getProducts(inquiry: ProductInquiry): Promise<Product[]>{
    console.log("inquiry", inquiry);
    const match: T={productStatus: ProductStatus.PROCESS};
    if(inquiry.productCollection) 
        match.productCollection = inquiry.productCollection;
    if(inquiry.search) {
        match.productName  = {$regex: new RegExp(inquiry.search, "i")};
    }

    const sort: T = inquiry.order === "productPrice"  
    ? {[inquiry.order]:1} 
    : {[inquiry.order]:-1};

    const result = await this.productModel.aggregate([
        {$match: match},
        {$sort: sort},
        {$skip: (inquiry.page * 1 -1) * inquiry.limit},
        {$limit: inquiry.limit * 1},
    ]).exec();

    if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.N_D_F);

    return result;
}

    /** SSR */

    public async getAllProducts(): Promise<Product[]> {
        const result = await this.productModel
        .find()
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.N_D_F);
        return result;
    }

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