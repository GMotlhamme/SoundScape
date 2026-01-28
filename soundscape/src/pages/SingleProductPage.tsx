import Footer from "@/components/FooterComponent";
import Header from "@/components/HeaderComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface Product {
    id?: number;
    product_id?: number;
    name: string;
    brand: string;
    description?: string;
    price: number;
    images?: string[];
}
/**
 * A page that displays a single product
 * This page receives the product as a state from the router
 * It displays the product name, brand, price, and a short description
 * It also displays two buttons, one to add the product to the cart and one to add it to the wishlist
 * The page also includes a secondary section which is a placeholder for future development
 */
export default function SingleProductPage() {
    const location = useLocation();
    const singleProduct: Product = location.state;
    const [addedToCart, setAddedToCart] = useState<boolean>(false);
    const [addedToWishList, setAddedToWishList] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const WishListData: Product[] = [];

    /**
     * Handles adding a product to the cart
     * Retrieves the cart data from local storage, parses it, and adds the single product to the cart
     * If the cart data is not in local storage, it creates a new cart with the single product
     * If there is an error parsing the cart data, it logs the error and creates a new cart with the single product
     * Sets the updated cart data back to local storage as an Array of product(s)
     */
    function handleAddToCart() {
        const keyInLocalStorage = "cartItem";
        const rawCartDataFromLocalStorage = localStorage.getItem(keyInLocalStorage);
        let cartData: Product[] = [];

        if (rawCartDataFromLocalStorage) {
            try {
                const parseCartData = JSON.parse(rawCartDataFromLocalStorage);
                cartData = Array.isArray(parseCartData) ? parseCartData : [parseCartData];
            } catch (error) {
                console.error("Error parsing cart data from localStorage:", error);
                cartData = [];
            }
        }
        cartData.push(singleProduct);
        localStorage.setItem(keyInLocalStorage, JSON.stringify(cartData));
        setAddedToCart(true);
    }

   

useEffect( () => {
    async function fetchExistingWishListData() {
        try {
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            const existingWishListDataDB = await axios.get(`${import.meta.env.VITE_WISHLIST_URL}`);
            if (!existingWishListDataDB.data.message) {return;}
            const rawWishListData = existingWishListDataDB.data.wishlistItems;
            
            
            const alreadyInList = rawWishListData.some((item: number | undefined) => item === singleProduct.id );
            
            if (alreadyInList) {
                console.log("Item already in wishlist");
                setAddedToWishList(true);
                return;
            }else{
            WishListData.push(rawWishListData);
        }
        } catch (error) {
            console.error("Error fetching wishlist data:", error);
        }
    }
fetchExistingWishListData();
},[singleProduct, WishListData]);


async function handleToWishList() {
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        await axios.post(`${import.meta.env.VITE_STORE_WISHLIST_URL}`, { id: singleProduct.id });
        setAddedToWishList(true);
    } catch (error) {
        console.error("Error adding item to wishlist:", error);
    }

}
    
    return (
        <>
            <Header />
            <section className="flex min-h-screen p-8 gap-4 mt-32">
                {location.state &&
                    <section className="flex flex-col gap-8 min-h-150 h-max w-190">

                        <h1 className="text-5xl">{singleProduct.name}</h1>
                        <p>{singleProduct.brand}</p>
                        <p className="w-160">{singleProduct.description || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eos est cumque facilis, facere totam at blanditiis asperiores quam aspernatur molestiae nulla autem rerum reprehenderit corrupti nesciunt itaque iusto. Vero."}</p>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl">R{singleProduct.price}</h2>
                            <div className="flex gap-2">

                                {addedToCart ?
                                    <button className="border border-[#B1A7A6] cursor-pointer bg-[#D3D3D3] transition px-24 py-2">Added to cart!</button> :
                                    <button onClick={handleAddToCart} className="border border-[#B1A7A6] cursor-pointer hover:bg-[#D3D3D3] transition px-24 py-2">Add to cart</button>
                                }

                                {addedToWishList ?
                                    <button className="px-4 border border-[#B1A7A6] cursor-pointer text-2xl"><abbr title="Wishlist"><i className="bi bi-heart-fill text-red-600"></i></abbr></button>
                                    : <button onClick={handleToWishList} className="px-4 border border-[#B1A7A6] cursor-pointer text-2xl"><abbr title="Wishlist"><i className="bi bi-heart"></i></abbr></button>
                                }


                            </div>
                        </div>
                    </section>
                }

                <section className="border border-[#B1A7A6] h-140 w-180 cursor-cell">
                    <img className="object-cover h-full w-full" src={singleProduct.images && singleProduct.images.length > 0 ? singleProduct.images[0] : ""} alt="" />
                </section>
            </section>
            <Footer />
        </>
    )
}