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
      <section className="h-screen min-h-min  bg-[#F5F3F4]">
        <Header />
        <div className="bg-[url('/SoundEscape.png')] h-60 flex justify-center p-18 mt-36 mx-16 bg-contain bg-no-repeat"></div>
        <div className="bg-[url('/introSpeakers.jpg')] h-150 w-full  bg-cover bg-no-repeat"></div>
        <section className="flex p-4 gap-28 bg-[#161A1D] overflow-hidden whitespace-nowrap">
          {slogan.map((log: string, indx: number) => (
            <p className="text-6xl text-white font-[350] " key={indx}>
              {log}
            </p>
          ))}
        </section>
          <section className="flex gap-0.5 text-lg text-white ">
            <button className="bg-[#660708] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#A4161A]">Earphones</button>
            <button className="bg-[#660708] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#A4161A]">Headphones</button>
            <button className="bg-[#660708] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#A4161A]">Speakers</button>
            <button className="bg-[#660708] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#A4161A]">Instruments</button>
            <button className="bg-[#660708] h-24 w-200 cursor-pointer transition delay-150 duration-300 hover:bg-[#A4161A]">Sound Bars</button>
          </section>

          <section className="flex justify-center items-center gap-0.5 my-38">
            <section className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>

            <section className="flex flex-col cursor-pointer justify-between  p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] hover:shadow h-144 w-max">
              <div className="bg-white border border-[#B1A7A6] w-100 h-86 max-h-90"></div>
              <h1 className="text-4xl  w-90 line-clamp-2 mb-4">Smart alarm speaker</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-blue-400 w-4 h-4"></p>
              <h1 className="text-3xl mt-4">R {12635.00}</h1>
            </section>

            <section className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] hover:shadow h-144 w-max">
              <div className="bg-white border border-[#B1A7A6] w-100 h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-900 w-4 h-4"></p>
              <h1 className="text-3xl mt-4">R {12635.00}</h1>
            </section>
          </section>

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
