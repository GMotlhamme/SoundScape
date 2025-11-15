import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
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
  // creating a custom type to use to specify types for the product objects 
  interface ProductInformation {
    name: string;
    brand?: string;
    price: number;
    image?: string;
  }

  const trendingProducts: ProductInformation[] = [
    {
      name: "Apple Air Pods Pro",
      brand: "Apple",
      price: 12999.00,
      image: "/appleAirPodsPro.png"
    },

    {
      name: "JBL FLIP 5",
      brand: "JBL",
      price: 5999.00,
      image: "/appleAirPodsPro.png"
    },

    {
      name: "SoundCore Quantum 2",
      brand: "SoundCore",
      price: 2699.00,
      image: "/appleAirPodsPro.png"
    },
  ];



  return (
    <>
      <section className="h-screen min-h-min  bg-[#F5F3F4]">
        <Header />
        <div className="bg-[url('/SoundEscape.png')] h-60 flex justify-center p-18 mt-36 mx-16 bg-contain bg-no-repeat"></div>
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
        <section className="flex gap-0.5 w-full text-lg text-white overflow-x-scroll">
          {products.map((product: string, index: number) => (
            <button key={index} className="bg-[#660708] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#A4161A]">{product}</button>
          ))}
        </section>

        {/* displaying the top 3 trending products  */}
        <section className="flex justify-center items-center gap-0.5 my-38">
          {trendingProducts.map((product: ProductInformation, index: number) => (

            <section key={index} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90">
                <img className="w-full h-full" src={product.image} alt={product.name} />
              </div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-2">{product.name}</h1>
              <p className="text-[#161A1D] mb-4">{product.brand}</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {product.price}</h1>
            </section>
          )).slice(0, 3)}
        </section>

        {/* events section where we can be redirected to learn more about Soundscape events */}
        <section className="flex justify-center italic bg-[url(/redlights.jpg)] bg-cover gap-8 bg-no-repeat p-8">

          <div className="flex justify-center bg-[url('/guyb&w.jpg')]  bg-cover bg-no-repeat p-44 text-6xl">SOUNDSCAPE EVENTS</div>
          <section className="backdrop-blur-sm">

            <article className="flex p-12 text-2xl text-white items-center ">SoundScape offers all lovers of sound an escape in the form of a multitude of events where creatives lovers of sound and everyone in between to get insight in the future of sound or just a space to jam. Come get lost in sound.</article>
            <button className="flex p-2 px-8 mx-12 text-2xl text-white items-center border border-gray-500  cursor-pointer">Learn More</button>
          </section>
        </section>
        <Footer />
      </section>
    </>
  );
}
