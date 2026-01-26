import { client } from "../index.js";

export default async function getTopProductsController(req, res) {
    try{
        const getProductsQuery = 'SELECT * FROM products WHERE status =\'Top\' ';
        const result = await client.query(getProductsQuery);
        if (result.rows.length === 0)return res.status(404).json({ message: "No products found" });
        // convert images from string to array
        result.rows.forEach(product => {
            if (product.images) {
                product.images = JSON.parse(product.images);
            }
        })
        result.rows.forEach(product => {
            if (product.price) {
                product.price = product.price.split("$")[1];
            }
        })

        return res.status(200).json({ products: result.rows });
    }catch(error){
        return res.status(500).json({ message: "Internal server error" });
    }

}