import Footer from "@/components/FooterComponent";
import Header from "@/components/HeaderComponent";
import type { ProductInformation } from "@/types/systemTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function Home() {
  const [storeItem, setStoreItem] = useState<ProductInformation[]>([])

useEffect(()=>{
  async function fetchTopProducts(){
    try {
      axios.defaults.headers.common['Authorization']= `Bearer ${localStorage.getItem('token')}`;
      const response = await axios.get(`${import.meta.env.VITE_TOP_PRODUCTS_URL}`);
      setStoreItem(response.data.products);
    } catch (error) {
      console.error('Error fetching top products:', error);
    }
  }
  fetchTopProducts();
},[]);


  const slogan: string[] = [
    "Build Your Fortress",
    "Build Your Fortress",
    "Build Your Fortress",
  ];

  const products: string[] = [
    "Earphones",
    "Headphones",
    "Speakers",
    "Instruments",
    "Sound Bars"
  ];


  return (
    <>
      <section className="h-screen min-h-min  bg-[#F5F3F4]">
        <Header />
        {/* <div className="bg-[url('/SoundEscape.png')] h-60 flex justify-center p-18 mt-36 mx-16 bg-contain bg-no-repeat"></div> */}
        <div className="bg-[url('/introSpeakers.jpg')] h-150 w-full  bg-cover bg-no-repeat"></div>

        {/* carousel of slogans */}
        <section id="slogan_container" className="flex p-4 gap-28 bg-[#161A1D] overflow-hidden whitespace-nowrap">
          {slogan.map((log: string, indx: number) => (
            <p className="text-6xl text-white font-[350] " key={indx}>
              {log}
            </p>
          ))}
        </section>

        {/* products we offer on Soundscape displayed by category */}
        <section className="flex justify-center gap-0.5 w-full text-lg text-white">
          {products.map((product: string, index: number) => (
            // <section className="h-24 w-20 cursor-pointer">
              <Link key={index} to={`/ProductCategory`} state={product}>
                <button  className="bg-[#660708] w-75 py-10 cursor-pointer transition delay-150 duration-300 hover:bg-[#A4161A]">{product}</button>
              </Link>
            // </section>
            
          ))}
        </section>

        {/* displaying the top 3 trending products  */}
        <section className="flex justify-center items-center gap-14 my-38">
          {storeItem.map((product: ProductInformation, index: number) => (
            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              {/* navigating to the single product page with the product as state */}
              <Link to={"/SingleProduct"} state={product}>
                <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90">
                  <img className="object-cover w-full h-full" src={product.images?.[0]} alt={product.name} />
                </div>
                <div className="h-50 flex flex-col justify-between">
                  <h1 className="text-4xl w-90 line-clamp-2 mb-2">{product.name}</h1>
                  <p className="text-[#161A1D] ">{product.brand}</p>
                  <h1 className="text-3xl mb-4">R {product.price}</h1>
                </div>
              </Link>
            </section>
          )).slice(0, 3)}
        </section>

        {/* events section where we can be redirected to learn more about Soundscape events */}
        <section className="flex justify-center italic bg-[url(/redlights.jpg)] bg-cover gap-8 bg-no-repeat p-8">

          <div className="flex justify-center bg-[url('/guyb&w.jpg')]  bg-cover bg-no-repeat p-44 text-6xl">SOUNDSCAPE EVENTS</div>
          <section className="backdrop-blur-sm">

            <article className="flex p-12 text-2xl text-white items-center ">SoundScape offers all lovers of sound an escape in the form of a multitude of events where creatives lovers of sound and everyone in between to get insight in the future of sound or just a space to jam. Come get lost in sound.</article>
            <Link to={"/Products"}>
            <button  className="flex p-2 px-8 mx-12 text-2xl text-white items-center border border-gray-500  cursor-pointer">Learn More</button>
            </Link>
          </section>
        </section>
        <Footer />
      </section>
    </>
  );
}
