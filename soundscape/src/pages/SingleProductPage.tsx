import Footer from "@/components/FooterComponent";
import Header from "@/components/HeaderComponent";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface Product {
    name: string;
    brand: string;
    description?: string;
    price: number;
    image?: string;
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
    const keyInLocalStorage = "WishListItem";
    const rawWishListDataFromLocalStorage = localStorage.getItem(keyInLocalStorage);

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

   
/**
 * Handles adding a product to the wishlist
 * Retrieves the wishlist data from local storage, parses it, and adds the single product to the wishlist
 * If the wishlist data is not in local storage, it creates a new wishlist with the single product
 * If there is an error parsing the wishlist data, it logs the error and creates a new wishlist with the single product
 * Makes sure to not add duplicate items to the wishlist
 * Sets the updated wishlist data back to local storage as an Array of product(s)
 * Sets the addedToWishList state to true if the item is added successfully
 */
    function handleToWishList() {
        
        let WishListData = []

        if (rawWishListDataFromLocalStorage) {
            try {
                const parseCartData = JSON.parse(rawWishListDataFromLocalStorage);
                WishListData = Array.isArray(parseCartData) ? parseCartData : [parseCartData];
            } catch (error) {
                console.error("Error parsing cart data from localStorage:", error);
                WishListData = [];
            }
        }

        //making sure to not add duplicate items to the wishlist
        const alreadyInList = WishListData.some(item => item.name === singleProduct.name);
        if (alreadyInList) {
            console.log("Item already in wishlist");
            setAddedToWishList(true);
            return;
        }
        WishListData.push(singleProduct);
        setAddedToWishList(true);
        localStorage.setItem(keyInLocalStorage, JSON.stringify(WishListData));

    }

    // checking if the item is already in the wishlist and setting the state accordingly on arrival
    useEffect(() => {
        if (rawWishListDataFromLocalStorage) {
            try {
                const parseWishListData = JSON.parse(rawWishListDataFromLocalStorage);
                const wishListDataArray = Array.isArray(parseWishListData) ? parseWishListData : [parseWishListData];
                const isInWishList = wishListDataArray.some((item: Product) => item.name === singleProduct.name);
                if(isInWishList){
                    setAddedToWishList(true);
                }
            } catch (error) {
                console.error("Error parsing wishlist data from localStorage:", error);
            }}
    }, [rawWishListDataFromLocalStorage, singleProduct.name]);

    
    return (
        <>
            <Header />
            <section className="flex h-screen p-8 gap-16 mt-32">
                {location.state &&
                    <section className="flex flex-col gap-8 min-h-150 ">

                        <h1 className="text-5xl">{singleProduct.name}</h1>
                        <p>{singleProduct.brand}</p>
                        <p className="w-160">{singleProduct.description || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eos est cumque facilis, facere totam at blanditiis asperiores quam aspernatur molestiae nulla autem rerum reprehenderit corrupti nesciunt itaque iusto. Vero."}</p>
                        <p>color</p>
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

                <section className="border border-[#B1A7A6] h-150 w-180">

                </section>
            </section>
            <Footer />
        </>
    )
}