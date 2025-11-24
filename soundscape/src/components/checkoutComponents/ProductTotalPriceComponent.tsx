export default function ProductTotalPriceComponent(props: string | number| any){
    return(
        <>
        <section className="flex my-4 py-4 w-md bg-white rounded-lg  gap-4">
            <div className="flex flex-col w-full justify-between px-4">
                <div className="flex justify-between font-semibold text-md ">
                    <p>{props.brand} Subtotal</p>  
                    <p>R {props.name} 599</p>
                </div>
                <div className="flex justify-between font-semibold text-md ">
                    <p>{props.brand} Shipping</p>  
                    <p>R {props.totalPrice > 500 ? "Free" : 100} Free</p>
                </div>
                <div className="flex justify-between font-bold text-md ">
                    <p>{props.brand} Total</p>  
                    <p>R{props.totalPrice && (props.totalPrice > 500 ? props.totalPrice : props.totalPrice + 100)} 599</p>
                </div>
                
            </div>
            
        </section>
        </>
    )
}