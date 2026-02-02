
// interface ProductTotalPriceProps {
//   productsInCart: Array<{ price: string }>;
//   shipping: "Delivery" | "Pick Up in Store";
// }

 interface ProductInformation {
  id?: number;
  name: string;
  brand?: string;
  price: string;
  category?: string;
  quantity?: number;
  description?: string;
  images?: string[];
}
/**
 * A React component that displays the total price of all items in the cart.
 * It also displays the shipping cost and the total cost (subtotal + shipping cost).
 * If the subtotal is greater than R500, shipping is free.
 * If the shipping type is "Pick Up in Store", shipping cost is R0.
 * @param {object} props - The component props object.
 * @param {any[]} props.productsInCart - An array of objects representing the items in the cart.
 * @param {string} props.shipping - The type of shipping ("Delivery" or "Pick Up in Store").
 */
export default function ProductTotalPriceComponent({productsInCart, shipping}: {productsInCart: ProductInformation[], shipping: boolean}) {

        // find all the prices in the cart items and sum them up
        const pricesOfCartItems = productsInCart.map((item) => item.price.split(",").join(""));
        
        let totalPrice = pricesOfCartItems.reduce((total:number, price: string) => total += parseInt(price), 0);
        
    return(
        <>
        <section className="flex my-4 py-4 w-full bg-white rounded-lg  gap-4">
            <div className="flex flex-col w-full justify-between px-4">
                <div className="flex justify-between font-semibold text-md ">
                    <p> Subtotal</p>  
                    <p>R {totalPrice} </p>
                </div>
                <div className="flex justify-between font-semibold text-md ">
                    <p>Shipping</p>  
                    <p> {shipping  ? (totalPrice > 500 ? "Free" : "R 100") : ("Pick Up in Store")} </p>
                </div>
                <div className="flex justify-between font-bold text-md ">
                    <p>Total</p>  
                    <p>R{totalPrice && (totalPrice > 50000 ? totalPrice : (totalPrice += 100))}</p>
                </div>
                
            </div>
            
        </section>
        </>
    )
}