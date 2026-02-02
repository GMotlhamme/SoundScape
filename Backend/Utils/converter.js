export default function convertProductData(product) {
    // Convert images from JSON string to JavaScript array
    if (product.images) {
        product.images = JSON.parse(product.images);
    }
    // Extract numeric value from price string
    if (product.price) {
        product.price = product.price.split("$")[1];
    }
    return product;
}