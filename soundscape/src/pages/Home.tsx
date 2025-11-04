import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  const slogan: string[] = [
    "Build Your Fortress",
    "Build Your Fortress",
    "Build Your Fortress",
  ];
  return (
    <>
      <section className="h-screen min-h-min  bg-[#F0EBD8]">
        <Header />
        {/* <div className="bg-[url('/SoundEscape.png')] h-60 flex justify-center p-18 mt-36 mx-16 bg-contain bg-no-repeat"></div> */}
        <div className="bg-[url('/introSpeakers.jpg')] h-150 w-full  bg-cover bg-no-repeat"></div>
        <section className="flex p-4 gap-28 bg-[#0D1321] overflow-hidden whitespace-nowrap">
          {slogan.map((log: string, indx: number) => (
            <p className="text-6xl text-white font-[350] " key={indx}>
              {log}
            </p>
          ))}
        </section>
          <section className="flex gap-0.5 text-lg ">
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#3E5C76]">Earphones</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#3E5C76]">Headphones</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#3E5C76]">Speakers</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#3E5C76]">Instruments</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#3E5C76]">Sound Bars</button>
          </section>

          <section className="flex justify-center items-center gap-0.5 my-38">
            <section className="flex flex-col cursor-pointer justify-start p-4 bg-[#748CAB] text-gray-800 hover:text-black hover:scale-105 transition delay-150 duration-300 hover:bg-[#3E5C76] h-144 w-max">
              <div className="bg-white w-100 h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-gray-800 mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>

            <section className="flex flex-col cursor-pointer justify-start  p-4 bg-[#748CAB]  text-gray-800 hover:text-black hover:scale-105 transition delay-150 duration-300 hover:bg-[#3E5C76] h-144 w-max">
              <div className="bg-white w-100 h-90"></div>
              <h1 className="text-4xl  w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-gray-800 mb-4">Apple</p>
              <p className="border rounded-full bg-blue-400 w-4 h-4"></p>
              <h1 className="text-3xl mt-4">R {12635.00}</h1>
            </section>

            <section className="flex flex-col cursor-pointer justify-start p-4 bg-[#748CAB]  text-gray-800 hover:text-black hover:scale-105 transition delay-150 duration-300 hover:bg-[#3E5C76] h-144 w-max">
              <div className="bg-white w-100 h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-gray-800 mb-4">Apple</p>
              <p className="border rounded-full bg-amber-900 w-4 h-4"></p>
              <h1 className="text-3xl mt-4">R {12635.00}</h1>
            </section>
          </section>

          <section>
            
          </section>
        <Footer />
      </section>
    </>
  );
}
