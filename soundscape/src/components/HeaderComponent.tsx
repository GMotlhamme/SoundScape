import { Button } from "@/components/ui/button"
import { useNavigate, type NavigateFunction } from "react-router";



/**
 * The Header component is a functional component that renders a navigation bar at the top of the page.
 * It contains links to the Home, Products, Community, Support, Profile, Wishlist, and Checkout pages.
 * The component uses the useNavigate hook from react-router to navigate to the different pages.
 * The component also uses the Button component from the ui folder to render the navigation links.
 * The component is exported as the default export of the HeaderComponent module.
 */

export default function Header() {
  const navigate: NavigateFunction = useNavigate();

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

  return (
    <>
      <section className="flex pl-4 fixed w-full top-0 border-b z-10 justify-between items-center  p-4 bg-[#F5F3F4]">
        <div onClick={toHome} className=" h-10 w-40 bg-[url('/Logo.png')] opacity-70 bg-contain bg-no-repeat "></div>

        <nav className="flex gap-4 ">
          {window.location.pathname === "/" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Home</Button>
            : <Button onClick={toHome} variant="ghost" className="cursor-pointer text-sm font-medium">Home</Button>}

          {window.location.pathname === "/Products" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Products</Button> :
            <Button variant="ghost" onClick={toProducts} className="cursor-pointer text-sm font-medium">Products</Button>}

          {window.location.pathname === "/Community" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Community</Button>
            : <Button variant="ghost" className="cursor-pointer text-sm font-medium">Community</Button>}

          {window.location.pathname === "/Support" ?
            <Button className="cursor-pointer bg-[#414141] text-white text-sm font-medium">Support</Button>
            : <Button variant="ghost" onClick={toSupport} className="cursor-pointer text-sm font-medium">Support</Button>}
        </nav>

        <section className="flex justify-center items-center gap-4 pr-8">
          <search className=" bg-white rounded-2xl">
            <input placeholder="Search" className="bg-white rounded-l-2xl p-1.5 w-62" type="text" />
            <i className="bi bi-search pr-4 pl-2 cursor-pointer"></i>
          </search>
          <nav className="flex gap-4">
            <button onClick={toProfile} className="cursor-pointer text-xl"><abbr title="Profile"><i className="bi bi-person-circle "></i></abbr></button>
            <button onClick={toWishList} className="cursor-pointer text-xl"><abbr title="Wishlist"><i className="bi bi-heart"></i></abbr></button>
            <button onClick={toCheckout} className="cursor-pointer text-xl"><abbr title="checkout"><i className="bi bi-cart"></i></abbr></button>
          </nav>
        </section>
      </section>
    </>
  );
}