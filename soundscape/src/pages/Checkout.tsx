import ProductMiniCardComponent from "@/components/checkoutComponents/productMiniCardComponent";
import ProductTotalPriceComponent from "@/components/checkoutComponents/ProductTotalPriceComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";



/**
 * A React component that renders the checkout page.
 * It displays a summary of the items in the cart, a shipping options section, and a payment form.
 * Users can remove items from the cart using the ProductMiniCardComponent.
 * The shipping options section allows the user to select either "Delivery" or "Pick Up in Store".
 * The payment form allows the user to enter their credit card details and submit an order.
 * The component also displays the total price of the items in the cart, including shipping costs.
 * If the user selects "Pick Up in Store", shipping is free.
 * If the user selects "Delivery", shipping costs R100.
 * The component also displays a "Pay" button that submits the order when clicked.
 * The component is connected to the state and will re-render when the state changes.
 */
export default function Checkout() {
    const [shipping, setShipping] = useState<string>("Pick Up in Store");
    const [cartItems, setCartItems] = useState<any[]>([]);
    const navigate = useNavigate();
    

    function toHome() {
        navigate("/")
    }

    useEffect(()=> {
        const cartItemsFromLocalStorage = localStorage.getItem("cartItem");
        if(!cartItemsFromLocalStorage){
           return setCartItems([])
        } else {
            const parsedItems = JSON.parse(cartItemsFromLocalStorage);
            setCartItems(parsedItems);
        }
    },[])
    console.log(cartItems);

/**
 * Removes an item from the cart based on its index
 * @param {number} indexToRemove - the index of the item to remove
 * Updates the cartItems state and local storage
 * The underscore (_) is used to ignore the first parameter of the filter callback function, which is the current item being processed
 */
    function removeItemFromCart(indexToRemove: number){
        const updated = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updated);
    localStorage.setItem("cartItem", JSON.stringify(updated));
    }
      

    return (
        <>
            <section className="flex justify-center ">
                <section className="flex flex-col justify-start border w-full min-h-screen p-12 overflow-y-scroll">
                    <div onClick={toHome} className="flex gap-4 cursor-pointer rounded-lg border w-max px-4 mb-4">
                        <i className="bi bi-arrow-return-left"></i>
                        <p>home</p>
                    </div>
                    <div>
                        <h1 className="text-4xl mb-4">Order Summary</h1>

                    </div>
                    <section className="flex flex-col gap-4">
                        {cartItems.length > 0 ? 
                        cartItems.map((product,index) => (
                        <ProductMiniCardComponent 
                        key={index}
                        removeItemFromCart={()=> removeItemFromCart(index)}
                        cartItems ={product}
                        /> ))
                        : (<p>Your cart is empty</p>)}
                    </section>
                </section>

                <section className="flex flex-col justify-start  w-full h-screen p-12 overflow-y-scroll">

                    <div>
                        <h1 className="text-4xl mb-4">Shipping</h1>
                        <section className="flex transition delay-150 duration-300 my-4">

                            {shipping === "Delivery" ? <button className="rounded-l border text-white p-2 px-12 bg-[#4b4b4b] cursor-pointer">Delivery</button>
                                : <button onClick={() => setShipping("Delivery")} className="rounded-l border bg-white p-2 px-12 focus:bg-[#4b4b4b] cursor-pointer">Delivery</button>}

                            {shipping === "Pick Up in Store" ? <button className="rounded-r text-white border p-2 px-6 bg-[#4b4b4b] cursor-pointer">Pick Up in Store</button> :
                                <button onClick={() => setShipping("Pick Up in Store")} className="rounded-r border bg-white p-2 px-6 focus:bg-[#4b4b4b] cursor-pointer">Pick Up in Store</button>}
                        </section>
                        {shipping === "Delivery" && <address className="flex flex-col gap-2">
                            <fieldset className="flex gap-4 w-full">
                                <div className="w-full">
                                    <p>First Name</p>
                                    <input className="bg-white rounded border px-2 py-1 w-full" type="text" />
                                </div>
                                <div className="w-full">
                                    <p>Last Name</p>
                                    <input className="bg-white rounded border px-2 py-1 w-full" type="text" />
                                </div>
                            </fieldset>

                            <fieldset className="flex flex-col gap-4">
                                <div>
                                    <p>Address line 1</p>
                                    <input className="bg-white rounded border px-2 py-1 w-full" type="text" />
                                </div>
                                <div>
                                    <p>Address line 2</p>
                                    <input className="bg-white rounded border px-2 py-1 w-full" type="text" />
                                </div>
                            </fieldset>

                            <fieldset className="flex gap-4">
                                <div className="w-full">
                                    <p>City</p>
                                    <input className="bg-white rounded border px-2 py-1 w-full" type="text" />
                                </div>
                                <div className="w-full">
                                    <p>Province</p>
                                    <input className="bg-white rounded border px-2 py-1 w-full" type="text" />
                                </div>
                                <div className="w-full">
                                    <p>Postal Code</p>
                                    <input className="bg-white rounded border px-2 py-1 w-full" type="text" />
                                </div>
                            </fieldset>
                            <p>Country</p>
                            <input className="bg-white rounded border px-2 py-1 w-full" type="text" />

                        </address>}
                    </div>
                    <section className="mt-4">
                        <h1 className="text-2xl mb-4">Payment</h1>
                        <form className="border border-[#4b4b4b] rounded flex flex-col gap-4 p-4">
                            <div className="border border-t-0 border-b-[#4b4b4b] -m-4 p-4 mb-2">

                                <h1 className="font-semibold">Credit Card</h1>
                            </div>
                            <input type="text" className="rounded border bg-white p-2" placeholder="Card number" />
                            <div className=" flex gap-4 w-full">

                                <input type="text" className="w-full rounded border p-2 bg-white" placeholder="Expiration" />
                                <input type="text" className="w-full rounded border p-2 bg-white" placeholder="Security code" />
                            </div>
                            <input type="text" className="rounded border p-2 bg-white" placeholder="Name on card" />
                            <ProductTotalPriceComponent
                                shipping={shipping}
                                productsInCart={cartItems}
                                
                            />
                            <button className="w-full p-2 text-white rounded bg-[#2105d9] cursor-pointer">Pay</button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}