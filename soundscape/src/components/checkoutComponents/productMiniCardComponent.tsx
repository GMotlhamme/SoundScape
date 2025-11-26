export default function ProductMiniCardComponent({ cartItems, removeItemFromCart }: any) {
    function handleRemove() {
        removeItemFromCart ? removeItemFromCart() : localStorage.removeItem("cartItem");
    }
    return (
        <>
            <div className="relative">
                <section className="flex border border-[#D3D3D3] pl-4 pr-2 py-4 w-120  min-w-100 bg-white rounded-lg  gap-4">


                    <div className="w-24 h-24 ">
                        <img className="w-full h-full object-cover" src={cartItems.image} alt={cartItems.name} />
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