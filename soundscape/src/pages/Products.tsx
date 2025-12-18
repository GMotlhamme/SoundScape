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
  const [storeItem] = useState<ProductInformation[]>([
      {
        name: "Air Pods Pro",
        brand: "Apple",
        price: 12999.00,
        image: ["/appleAirPodsPro.png"]
      },
  
      {
        name: "FLIP 5",
        brand: "JBL",
        price: 5999.00,
        image: ["/appleAirPodsPro.png"]
      },
  
      {
        name: "Quantum 2",
        brand: "SoundCore",
        price: 2699.00,
        image: ["/appleAirPodsPro.png"]
      },
      {
        name: "Guitar",
        brand: "Yamaha",
        price: 4999.00,
        image: ["/appleAirPodsPro.png"]
      },
      {
        name: "Sound Bar",
        brand: "Samsung",
        price: 5999.00,
        image: ["/appleAirPodsPro.png"]
      }
    ])


    return(
        <>
        <Header />
        {/* headphones section */}
        <section className="mt-28 ">
        <div className="flex items-center gap-4 my-4 justify-end mr-10">
        <div className="text-2xl">HeadPhones</div>
        <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>

        </div>
        <section  className="flex flex-row justify-end gap-10  mx-10">
        {storeItem.length > 0 && 
        storeItem.map((item: ProductInformation,index) => 
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-90 w-max">
              <Link to="/SingleProduct" state={item}  >
              <div className="bg-white border border-[#B1A7A6] w-50 h-60 max-h-90">
                {item.image && item.image.length > 0 && <img className="object-cover" src={item.image[0]} alt={item.name} />}
              </div>
              <h1 className="text-2xl w-50 line-clamp-2">{item.name}</h1>
              <p className="text-[#161A1D]">{item.brand}</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-xl  ">R {item.price}</h1>
           </Link>
            </section>

          ).slice(0,6)}
          </section>
</section>

        {/* speakers section */}
        <section className="mt-28 mb-10">
        <div className="flex items-center gap-4 my-4 justify-end mr-10">
        <div className="text-2xl">Speakers</div>
        <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>

        </div>
        <section  className="flex flex-row justify-end gap-10  mx-10">
        {storeItem.length > 0 && 
        storeItem.map((item: ProductInformation,index) => 
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-90 w-max">
              <Link to="/SingleProduct" state={item}  >
              <div className="bg-white border border-[#B1A7A6] w-50 h-60 max-h-90">
                {item.image && item.image.length > 0 && <img className="object-cover" src={item.image[0]} alt={item.name} />}
              </div>
              <h1 className="text-2xl w-50 line-clamp-2">{item.name}</h1>
              <p className="text-[#161A1D]">{item.brand}</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-xl  ">R {item.price}</h1>
           </Link>
            </section>

          ).slice(0,6)}
          </section>
</section>

        {/* Earphones section */}
        <section className="mt-28 ">
        <div className="flex items-center gap-4 my-4 justify-end mr-10">
        <div className="text-2xl">Earphones</div>
        <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>

        </div>
        <section  className="flex flex-row justify-end gap-10  mx-10">
        {storeItem.length > 0 && 
        storeItem.map((item: ProductInformation,index) => 
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-90 w-max">
              <Link to="/SingleProduct" state={item}  >
              <div className="bg-white border border-[#B1A7A6] w-50 h-60 max-h-90">
                {item.image && item.image.length > 0 && <img className="object-cover" src={item.image[0]} alt={item.name} />}
              </div>
              <h1 className="text-2xl w-50 line-clamp-2">{item.name}</h1>
              <p className="text-[#161A1D]">{item.brand}</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-xl  ">R {item.price}</h1>
           </Link>
            </section>

          ).slice(0,6)}
          </section>
</section>
        {/* Soundbars section */}
        <section className="mt-28 ">
        <div className="flex items-center gap-4 my-4 justify-end mr-10">
        <div className="text-2xl">Soundbars</div>
        <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>

        </div>
        <section  className="flex flex-row justify-end gap-10  mx-10">
        {storeItem.length > 0 && 
        storeItem.map((item: ProductInformation,index) => 
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-90 w-max">
              <Link to="/SingleProduct" state={item}  >
              <div className="bg-white border border-[#B1A7A6] w-50 h-60 max-h-90">
                {item.image && item.image.length > 0 && <img className="object-cover" src={item.image[0]} alt={item.name} />}
              </div>
              <h1 className="text-2xl w-50 line-clamp-2">{item.name}</h1>
              <p className="text-[#161A1D]">{item.brand}</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-xl  ">R {item.price}</h1>
           </Link>
            </section>

          ).slice(0,6)}
          </section>
</section>
        {/* Instruments section */}
        <section className="mt-28 mb-10">
        <div className="flex items-center gap-4 my-4 justify-end mr-10">
        <div className="text-2xl">Instruments</div>
        <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>

        </div>
        <section  className="flex flex-row justify-end gap-10  mx-10">
        {storeItem.length > 0 && 
        storeItem.map((item: ProductInformation,index) => 
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-104 w-max">
              <Link to="/SingleProduct" state={item}  >
              <div className="bg-white border border-[#B1A7A6] w-50 h-70 max-h-90">
                {item.image && item.image.length > 0 && <img className="object-cover" src={item.image[0]} alt={item.name} />}
              </div>
              <h1 className="text-2xl w-50 line-clamp-2">{item.name}</h1>
              <p className="text-[#161A1D]">{item.brand}</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-xl  ">R {item.price}</h1>
           </Link>
            </section>

          ).slice(0,6)}
          </section>
</section>
         
        <Footer />
        </>
    )
}