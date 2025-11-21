import Footer from "@/components/FooterComponent"
import Header from "@/components/HeaderComponent"

/**
 * A component that displays the user's wishlist
 * This component is a single page that displays all the products that the user has added to their wishlist
 * It includes a header, a section for the wishlist, and a footer
 * The wishlist section contains a heading that says "My Wishlist" and a paragraph that says "Just a few things you've been eyeing!"
 * Below the heading and paragraph, there is a div that contains a background image of a wishlist picture
 * Below the div, there is a grid section that contains all the products in the user's wishlist
 * Each product is displayed in a section element that contains a div element with a background image of the product, a paragraph element with the product name, and a paragraph element with the product price
 * The component also includes a footer element at the bottom of the page
 */
export default function WishList(){
    return(
        <>
        <Header /> 
        <section className="mt-30 h-max flex">
            <section className="p-24 pt-0">
                <h1 className="text-5xl mb-4">My Wishlist</h1>
                <p className="">Just a few things you've been eyeing!</p>
                <div className="flex bg-[url('/wishlistPic.jpg')] bg-cover bg-no-repeat w-150 h-170 items-center mb-8"></div>
            </section>
                <section className="h-120 w-max pt-18">

                    <section className="grid grid-cols-2 gap-8 text-neutral-800 w-max pr-4 ">
                        <section className="w-max border border-gray-300 rounded cursor-pointer p-4 flex flex-col items-start">
                            <div className="bg-white border border-gray-300 rounded p-18 mb-4"></div>
                            <p className="line-clamp-1">Product Name</p>
                            <p className="font-bold">R99.99</p>
                        </section>
                    </section>
                </section>
        </section>
        <Footer />
        </>
    )
}