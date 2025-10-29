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
        <div className="bg-[url('/SoundEscape.png')] h-60 flex justify-center p-18 mt-36 mx-16 bg-contain bg-no-repeat"></div>
        <div className="bg-[url('/introSpeakers.jpg')] h-150 w-full  bg-cover bg-no-repeat"></div>
        <section className="flex p-4 gap-28 bg-[#0D1321] overflow-hidden whitespace-nowrap">
          {slogan.map((log: string, indx: number) => (
            <p className="text-6xl text-white font-[350] " key={indx}>
              {log}
            </p>
          ))}
        </section>
          <section className="flex gap-0.5 text-lg ">
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer hover:bg-[#3E5C76]">Earphones</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer hover:bg-[#3E5C76]">Headphones</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer hover:bg-[#3E5C76]">Speakers</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer hover:bg-[#3E5C76]">Instruments</button>
            <button className="bg-[#748CAB] h-24 w-200 cursor-pointer hover:bg-[#3E5C76]">Sound Bars</button>
          </section>

          <section className="py-100">
            
          </section>
        <Footer />
      </section>
    </>
  );
}
