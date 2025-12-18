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
export default function Products() {
  const [storeItem] = useState<ProductInformation[]>([
    {
      name: "Air Pods Pro",
      brand: "Apple",
      price: 12999.00,
      category: "Earphones",
      image: ["/appleAirPodsPro.png"]
    },

    {
      name: "FLIP 5",
      brand: "JBL",
      price: 5999.00,
      category: "Speakers",
      image: ["/appleAirPodsPro.png"]
    },

    {
      name: "Quantum 2",
      brand: "SoundCore",
      price: 2699.00,
      category: "Headphones",
      image: ["/appleAirPodsPro.png"]
    },
    {
      name: "Guitar",
      brand: "Yamaha",
      price: 4999.00,
      category: "Instruments",
      image: ["/appleAirPodsPro.png"]
    },
    {
      name: "Quantum 3",
      brand: "SoundCore",
      price: 4699.00,
      category: "Headphones",
      image: ["/appleAirPodsPro.png"]
    },
    {
      name: "Sound Bar",
      brand: "Samsung",
      price: 5999.00,
      category: "Soundbars",
      image: ["/appleAirPodsPro.png"]
    }
  ])

  // the product card that will be reused for each category
  const productCard = (item: ProductInformation, index: number) => (
    <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-90 w-max">
      <Link to="/SingleProduct" state={item}>
        <div className="bg-white border border-[#B1A7A6] w-50 h-60 max-h-90">
          {item.image && item.image.length > 0 && <img className="object-cover" src={item.image[0]} alt={item.name} />}
        </div>
        <h1 className="text-2xl w-50 line-clamp-2">{item.name}</h1>
        <p className="text-[#161A1D]">{item.brand}</p>
        <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
        <h1 className="text-xl">R {item.price}</h1>
      </Link>
    </section>
  )

/**
 * A helper function that renders a section of products based on a given category.
 * It filters the products in the storeItem state based on the given category,
 * slices the result to only include the first 6 products, and maps
 * each product to the productCard component.
 * @param {string} category - The category to render
 */
  const renderCategory = (category: string) =>
    storeItem.filter(i => i.category?.toLowerCase() === category.toLowerCase()).slice(0, 6).map(productCard)

  return (
    <>
      <Header />

      <section className="flex flex-col items-end justify-end mt-28 mx-10">
        <div className="flex items-center gap-4 my-4 justify-end">
          <div className="text-2xl">HeadPhones</div>
          <Link to="/ProductCategory" state={storeItem}>
            <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>
          </Link>
        </div>

        <div className="flex gap-4">
          {renderCategory("Headphones")}
        </div>
      </section>

      <section className="flex flex-col items-end justify-end mt-28 mx-10">
        <div className="flex items-center gap-4 my-4 justify-end">
          <div className="text-2xl">Earphones</div>
          <Link to="/ProductCategory" state={storeItem}>
            <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>
          </Link>
        </div>

        <div className="flex gap-4">
          {renderCategory("Earphones")}
        </div>
      </section>

      <section className="flex flex-col items-end justify-end mt-28 mx-10">
        <div className="flex items-center gap-4 my-4 justify-end">
          <div className="text-2xl">Speakers</div>
          <Link to="/ProductCategory" state={storeItem}>
            <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>
          </Link>
        </div>

        <div className="flex gap-4">
          {renderCategory("Speakers")}
        </div>
      </section>

      <section className="flex flex-col items-end justify-end mt-28 mx-10">
        <div className="flex items-center gap-4 my-4 justify-end">
          <div className="text-2xl">Instruments</div>
          <Link to="/ProductCategory" state={storeItem}>
            <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>
          </Link>
        </div>

        <div className="flex gap-4">
          {renderCategory("Instruments")}
        </div>
      </section>
      
      <section className="flex flex-col items-end justify-end mt-28 mb-10 mx-10">
        <div className="flex items-center gap-4 my-4 justify-end">
          <div className="text-2xl">Soundbars</div>
          <Link to="/ProductCategory" state={storeItem}>
            <button className="p-2 px-4 focus:bg-[#D3D3D3]  border border-[#B1A7A6] cursor-pointer">Load more</button>
          </Link>
        </div>

        <div className="flex gap-4">
          {renderCategory("Soundbars")}
        </div>
      </section>
     
      <Footer />
    </>
  )
}