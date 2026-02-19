import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { useNavigate, type NavigateFunction } from "react-router";
import type { ProductInformation } from "@/types/systemTypes"
import axios from "axios";


/**
 * The Header component is a functional component that renders a navigation bar at the top of the page.
 * It contains links to the Home, Products, Community, Support, Profile, Wishlist, and Checkout pages.
 * The component uses the useNavigate hook from react-router to navigate to the different pages.
 * The component also uses the Button component from the ui folder to render the navigation links.
 * The component is exported as the default export of the HeaderComponent module.
 */

export default function Header() {
  const navigate: NavigateFunction = useNavigate();
  const [cartItems, setCartItems] = useState<ProductInformation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //navigate to the products page
  function toProducts(): void {
    navigate("/Products")
  }
  // Navigate to the home page 
  function toHome(): void {
    navigate("/")
  }
  // navigate to the support page 
  function toSupport(): void {
    navigate("/Support")
  }
  // navigate to the profile page 
  function toProfile(): void {
    navigate("/Profile")
  }
  // navigate to the wishlist 
  function toWishList(): void {
    navigate("/WishList")
  }
  // navigate to the checkout 
  function toCheckout(): void {
    navigate("/Checkout")
  }
  function toCommunity(): void {
    navigate("/Community")
  }

  useEffect(() => {

    try {
      async function fetchCartItems() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await axios.get(`${import.meta.env.VITE_CART_URL}`);
        if (!response.data.itemIds) {
          setCartItems([]);
          return;
        }
        setCartItems(response.data.itemIds as ProductInformation[]);
      }
      fetchCartItems();
    } catch (error) {
      console.error("Error setting cart items:", error);
      setCartItems([]);
    }
  }, [])

  const numberOfItemsInCart = cartItems.length;

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search") as string;
    try {
      const result = await axios.get(`${import.meta.env.VITE_SEARCH_URL}${searchQuery}`);
      const products = result?.data?.products ?? [];
      setLoading(false);
      navigate(`/SearchResults`, { state: products });
    } catch (error) {
      console.error("Search request failed:", error);
      setLoading(false);
      navigate(`/SearchResults`, { state: [] });
    }
    
  }
  return (
    <>
      <section className="flex pl-4 fixed w-full top-0 border-b z-10 justify-between items-center  p-4 bg-[#F5F3F4]">
        <div onClick={toHome} className=" h-10 w-40 bg-[url('/NewLogo.png')] opacity-70 bg-contain bg-no-repeat "></div>

        <nav className="flex gap-4 ">
          {window.location.pathname === "/" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Home</Button>
            : <Button onClick={toHome} variant="ghost" className="cursor-pointer text-sm font-medium">Home</Button>}

          {window.location.pathname === "/Products" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Products</Button> :
            <Button variant="ghost" onClick={toProducts} className="cursor-pointer text-sm font-medium">Products</Button>}

          {window.location.pathname === "/Community" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Community</Button>
            : <Button variant="ghost" onClick={toCommunity} className="cursor-pointer text-sm font-medium">Community</Button>}

          {window.location.pathname === "/Support" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Support</Button>
            : <Button variant="ghost" onClick={toSupport} className="cursor-pointer text-sm font-medium">Support</Button>}
        </nav>

        <section className="flex justify-center items-center gap-4 pr-8">
          <search  className=" bg-white rounded-2xl">
            <form onSubmit={handleSearch}>
              <input placeholder="Search" name="search" className="bg-white rounded-l-2xl p-1.5 w-62" type="text" />
              {loading ? "loading" : <button type="submit"><i className="bi bi-search pr-4 pl-2 cursor-pointer"></i></button>}
            </form>
          </search>
          <nav className="flex gap-4">
            <button onClick={toProfile} className="cursor-pointer text-xl"><abbr title="Profile"><i className="bi bi-person-circle "></i></abbr></button>
            <button onClick={toWishList} className="cursor-pointer text-xl"><abbr title="Wishlist"><i className="bi bi-heart"></i></abbr></button>
            <button onClick={toCheckout} className="cursor-pointer text-xl flex"><abbr title="checkout"><i className="bi bi-cart"></i></abbr><p className="italic text-sm">{numberOfItemsInCart !== 0 && numberOfItemsInCart}</p></button>
          </nav>
        </section>
      </section>
    </>
  );
}