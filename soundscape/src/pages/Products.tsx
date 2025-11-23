import Footer from "@/components/FooterComponent";
import Header from "@/components/HeaderComponent";
import { Link } from "react-router";
import { useState } from "react";
import type { ProductInformation } from "@/types/systemTypes";

/**
 * The Products component is a React component that is used to render the products page.
 * It displays all the products that are stored in the state, with each product being displayed in a section element.
 * The component also includes a "Load more" button at the bottom of the page.
 * When clicked, this button will load more products onto the page.
 * The component also renders a footer element at the bottom of the page.
 */
export default function Products(){
  const [storeItem, setStoreItem] = useState<ProductInformation[]>([
      {
        name: "Air Pods Pro",
        brand: "Apple",
        price: 12999.00,
        image: "/appleAirPodsPro.png"
      },
  
      {
        name: "FLIP 5",
        brand: "JBL",
        price: 5999.00,
        image: "/appleAirPodsPro.png"
      },
  
      {
        name: "Quantum 2",
        brand: "SoundCore",
        price: 2699.00,
        image: "/appleAirPodsPro.png"
      },
      {
        name: "Guitar",
        brand: "Yamaha",
        price: 4999.00,
        image: "/appleAirPodsPro.png"
      },
      {
        name: "Sound Bar",
        brand: "Samsung",
        price: 5999.00,
        image: "/appleAirPodsPro.png"
      }
    ])


    return(
        <>
        <Header />
        <section  className="grid  grid-cols-3 place-items-center gap-y-18 my-38">
        {storeItem.length > 0 && 
        storeItem.map((item,index) => 
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <Link to="/SingleProduct" state={item}  >
              <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">{item.name}</h1>
              <p className="text-[#161A1D] mb-4">{item.brand}</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {item.price}</h1>
           </Link>
            </section>

          )}
          </section>
          <section className="flex justify-center m-8">
            <button className="p-4 px-8 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>
          </section>
        <Footer />
        </>
    )
}