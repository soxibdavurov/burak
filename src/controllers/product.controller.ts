import {Request, Response} from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import {T} from "../libs/types/common"
import ProductService from "../models/Product.service";
import { ProductInput } from "../libs/types/product";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService;

const productController: T ={};

    /** SPA */


    /** SSR */

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
    try {
        console.log('getAllProducts');
        const data = await productService.getAllProducts();
        console.log("data:", data);

        res.render("products", {products: data});
    } catch (err) {
        console.log("Error, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({ });
    }    
};

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        console.log('createNewProduct');
        console.log(req.files);

        if(!req.files?.length) 
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CR_FAIL);

        const data: ProductInput = req.body;
        data.productImages = req.files?.map((ele) => {
            return ele.path.replace(/\\/g, "/");
        });
        await productService.createNewProduct(data);

        res.send(`
            <script>alert("Sucessfull creation!"); window.location.replace('/admin/product/all');</script>`);

    } catch (err) {
        console.log("Error, createNewProduct", err);
        const message = 
            err instanceof Errors? err.message:Message.SMT_WENT_WR;
       res.send(`<script>alert("${message}"); window.location.replace('/admin/product/all');</script>`);
            }    
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log('updateChosenProduct');
        const id = req.params.id;
 
        const result = await productService.updateChosenProduct(id, req.body);
        res.status(HttpCode.OK).json({data: result});
    } catch (err) {
        console.log("Error, updateChosenProduct", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({ });
    }    
};

export default productController;

