import { client } from "../index.js";
/**
 * Deletes a product from the database.
 * The function takes an id as a parameter in the request body and deletes the product with the given id.
 * If the product is successfully deleted, it returns a 200 status code with a message saying "Product deleted successfully".
 * If there is an error, it returns a 500 status code with a message saying "Error deleting product" and the error message.
 */
export default async function removeProductController(req, res){
    try {
        const { id } = req.params;
        const deleteProductQuery = 'DELETE FROM products WHERE id = $1';
        await client.query(deleteProductQuery, [id]);
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        return res.json({ message: "Error deleting product", error: error.message });
    }
}