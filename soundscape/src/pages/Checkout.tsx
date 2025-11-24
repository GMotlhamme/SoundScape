import ProductMiniCardComponent from "@/components/checkoutComponents/productMiniCardComponent";
import ProductTotalPriceComponent from "@/components/checkoutComponents/ProductTotalPriceComponent";



export default function Checkout(){

    function calculateTotalPrice(prices: number[]): number {
        
        return prices.reduce((total, price) => total + price, 0);
    }
    return(
        <>
        <section className="flex justify-center ">

            <section className="flex flex-col justify-start border w-full min-h-screen p-12">
                <div>
                    <h1 className="text-4xl">Order Summary</h1>
                    <div className="flex gap-8 my-4">
                        <p>Total Items Summary</p> 
                        <p>Shipping address</p>
                    </div>
                </div>
                <section className="flex flex-col gap-4">
                <ProductMiniCardComponent/>
                <ProductMiniCardComponent/>
                <ProductMiniCardComponent/>
                </section>
            </section>

            <section className="flex flex-col justify-start bg-amber-300 w-full h-screen p-12">

            <h1>Checkout page</h1>
                <ProductTotalPriceComponent/>
            </section>
        </section>
        </>
    )
}