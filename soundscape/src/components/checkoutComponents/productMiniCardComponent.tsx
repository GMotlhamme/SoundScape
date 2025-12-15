import type { ProductMiniCardProps } from "@/types/systemTypes";

/**
 * A React component that displays a single product in a cart.
 * It receives the product to display and an optional function to remove the item from the cart.
 * If the removeItemFromCart function is not provided, it will remove the item from the cart by removing the item from local storage.
 * The component displays the product name, brand, price, and quantity.
 * It also displays a button to remove the item from the cart.
 * The component is connected to the state and will re-render when the state changes.
 * @param {object} props - The component props object.
 * @param {ProductMiniCardProps.cartItems} props.cartItems - The product to display.
 * @param {ProductMiniCardProps.removeItemFromCart} props.removeItemFromCart - An optional function to remove the item from the cart.
 */
export default function ProductMiniCardComponent({ cartItems, removeItemFromCart }: ProductMiniCardProps) {
    function handleRemove() {
        if (removeItemFromCart) {
            removeItemFromCart();
        } else {
            localStorage.removeItem("cartItem");
        }
    }
    return (
        <>
            <div className="relative">
                <section className="flex border border-[#D3D3D3] pl-4 pr-2 py-4 w-120  min-w-100 bg-white rounded-lg  gap-4">


                    <div className="w-24 h-24 ">
                        <img className="w-full h-full object-cover" src={cartItems.image?.[0]} alt={cartItems.name} />
                    </div>
                    <div className="flex flex-col justify-around px-4 w-full">
                        <div className="flex justify-between items-center w-full">

                        <h3 className="flex font-semibold text-md gap-2 line-clamp-2">{cartItems.brand}   <p>- {cartItems.name}</p></h3>
                         <i onClick={handleRemove} className="bi bi-x-circle  text-xl  text-[#A4161A] cursor-pointer"></i>
                        </div>
                        <div className="flex gap-4">
                            <p className="">{cartItems.category && cartItems.category}</p>
                            <p className="">{cartItems.quantity}</p>
                        </div>
                        <p>R {cartItems.price}</p>
                    </div>
                </section>
            </div>
        </>
    )
}