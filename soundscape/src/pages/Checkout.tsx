import ProductMiniCardComponent from "@/components/checkoutComponents/productMiniCardComponent";
import ProductTotalPriceComponent from "@/components/checkoutComponents/ProductTotalPriceComponent";
import { useState } from "react";
import { useNavigate } from "react-router";



export default function Checkout() {
    const [shipping, setShipping] = useState<string>("Pick Up in Store");
    const navigate = useNavigate();
    function calculateTotalPrice(prices: number[]): number {
        return prices.reduce((total, price) => total + price, 0);
    }

    function toHome() {
        navigate("/")
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
                        <ProductMiniCardComponent />
                        <ProductMiniCardComponent />
                        <ProductMiniCardComponent />
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

                                calculateTotalPrice={calculateTotalPrice}
                            />
                            <button className="w-full p-2 text-white rounded bg-[#2105d9] cursor-pointer">Pay</button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}