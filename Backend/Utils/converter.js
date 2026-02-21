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
export function convertProductPriceData(product) {
    
    // Extract numeric value from price string
    if (product.price) {
        product.price = product.price.split("$")[1];
        if(product.price.includes(",")) {
            product.price = product.price.replace(/,/g, '');
        }
        return parseFloat(product.price);
    }
    return product;
}