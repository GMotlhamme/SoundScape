import Footer from "@/components/FooterComponent"
import Header from "@/components/HeaderComponent"
import { useEffect, useState } from "react"
import type { ProductInformation } from "@/types/systemTypes"
import axios from "axios";


/**
 * A React component that renders the Wishlist page.
 * It displays a title, a short description, and a list of items in the user's wishlist.
 * The items are retrieved from local storage and are displayed in a grid layout.
 * If there are no items in the wishlist, a message is displayed instead.
 * The component also renders the Header and Footer components.
 */
export default function WishList() {
    const [wishlistItems, setWishlistItems] = useState<ProductInformation[]>([]);


    async function fetchWishlistItems() {
        try {
            axios.defaults.headers.common['Authorization']= `Bearer ${localStorage.getItem("token")}`;
            const response = await axios.get(`${import.meta.env.VITE_WISHLIST_URL}`);
            if (!response.data.wishlistItems) {
                setWishlistItems([]);
                return;
            }
            else{const itemsArray = [];
            for (const item of response.data.wishlistItems){
               const result = await axios.get(`${import.meta.env.VITE_SINGLE_PRODUCT_URL}${item}`)
               itemsArray.push(result.data.product);
            }
            setWishlistItems(itemsArray);}

        } catch (error) {
            console.error(error);
        }
    }
    
    

    
    useEffect(() => {
        try {
            fetchWishlistItems()
        } catch {
            setWishlistItems([])
        }
    }, [])


    /**
     * Removes an item from the wishlist at the given index.
     * Retrieves the wishlist items from local storage, removes the item at the given index, and updates the local storage and state.
     * @param {number} indexOfItem - the index of the item to remove
     */
    async function RemoveItem(indexOfItem: number) {
        try{
        const updatedWishlist = wishlistItems.filter((_, index) => index !== indexOfItem);
        const itemIds = updatedWishlist.map(item=> item.id)
        for (const item of itemIds){
        
        axios.defaults.headers.common['Authorization']= `Bearer ${localStorage.getItem("token")}`;
         await axios.patch(`${import.meta.env.VITE_UPDATE_WISHLIST_URL}`, {id: item})
        }
        setWishlistItems(updatedWishlist);
            
    }catch(error){
            console.error(error);
        }
    }


    return (
        <>
            <Header />
            <section className="mt-30 h-max flex">
                <section className="p-24 pt-0">
                    <h1 className="text-5xl mb-4">My Wishlist</h1>
                    <p className="">Just a few things you've been eyeing!</p>
                    <div className="flex bg-[url('/wishlistPic.jpg')] bg-cover bg-no-repeat w-150 h-170 items-center mb-8"></div>
                </section>
                <section className="h-120 w-max pt-18">

                    <section className="grid grid-cols-3 gap-8 text-neutral-800 w-max pr-4 ">
                        {wishlistItems && wishlistItems?.length > 0 ?
                            wishlistItems.map((item: ProductInformation, index: number) => (
                                <section key={index} className="w-max border border-gray-300 rounded cursor-pointer p-4 flex flex-col items-start">
                                    <div className="bg-white border border-gray-300 rounded w-38 h-38 mb-4">
                                        <img className="object-cover " src={item.images?.[0]} alt={item.name} />
                                    </div>
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <p className="line-clamp-1 w-34">{item.name}</p>
                                            <p className="font-bold">R{item.price}</p>
                                        </div>
                                        <i onClick={() => RemoveItem(index)} className="bi bi-x-circle text-xl  text-[#A4161A] cursor-pointer"></i>
                                    </div>
                                </section>

                            ))
                            : "Nothing in your sights"}
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}