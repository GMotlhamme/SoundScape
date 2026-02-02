import { client } from "../index.js";
import convertProductData from "../Utils/converter.js";

export default async function getTopProductsController(req, res) {
    try{
        const getProductsQuery = 'SELECT * FROM products WHERE status =\'Top\' ';
        const result = await client.query(getProductsQuery);
        if (result.rows.length === 0)return res.status(404).json({ message: "No products found" });
        // convert images from string to array
        result.rows.forEach(product => {
            convertProductData(product);
        })

        return res.status(200).json({ products: result.rows });
    }catch(error){
        return res.status(500).json({ message: "Internal server error" });
    }

}