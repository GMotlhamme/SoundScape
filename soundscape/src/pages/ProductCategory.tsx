import Footer from "@/components/FooterComponent";
import Header from "@/components/HeaderComponent";
import type { ProductInformation } from "@/types/systemTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function ProductCategory(){
    const location = useLocation();
    const storeItem: ProductInformation[] = location.state ;
    const [productCategory, setProductCategory]= useState<[]>([])
    
    
    //API CALL to fetch products by category can be implemented here
    useEffect(() => {
      async function fetchProductCategory(){
        try {
          const result = await axios.get(`${import.meta.env.VITE_PRODUCTS_CATEGORY_URL}${storeItem}`)
          setProductCategory(result.data.products)
          console.log(result.data);
          
        } catch (error) {
          console.error("Error fetching products by category:", error);
        }
      };
      fetchProductCategory();
    },[storeItem]);


    return(
        <>
         <Header />
        <section  className="grid  grid-cols-3 place-items-center gap-y-18 my-38">
        {productCategory.length > 0 && 
        productCategory.map((item: ProductInformation,index) => 
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <Link to="/SingleProduct" state={item}  >
              <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90">
                {item.images && item.images.length > 0 && <img className="object-cover h-full" src={item.images[0]} alt={item.name} />}
              </div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">{item.name}</h1>
              <p className="text-[#161A1D] mb-4">{item.brand}</p>
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