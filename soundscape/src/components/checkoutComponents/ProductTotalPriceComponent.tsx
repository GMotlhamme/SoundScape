
/**
 * A React component that displays the total price of all items in the cart.
 * It also displays the shipping cost and the total cost (subtotal + shipping cost).
 * If the subtotal is greater than R500, shipping is free.
 * If the shipping type is "Pick Up in Store", shipping cost is R0.
 * @param {object} props - The component props object.
 * @param {any[]} props.productsInCart - An array of objects representing the items in the cart.
 * @param {string} props.shipping - The type of shipping ("Delivery" or "Pick Up in Store").
 */
export default function ProductTotalPriceComponent({productsInCart, shipping}: any){

        // find all the prices in the cart items and sum them up
        const pricesOfCartItems = productsInCart.map((item:any) => item.price)
        let totalPrice = pricesOfCartItems.reduce((total:number, price: number) => total + price, 0);
        
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
                    <p> {shipping === "Delivery" ? (totalPrice > 500 ? "Free" : "R 100") : ("Pick Up in Store")} </p>
                </div>
                <div className="flex justify-between font-bold text-md ">
                    <p>Total</p>  
                    <p>R{totalPrice && (totalPrice > 500 ? totalPrice : (totalPrice += 100))}</p>
                </div>
                
            </div>
            
        </section>
        </>
    )
}