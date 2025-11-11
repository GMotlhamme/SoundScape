import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useNavigate, type NavigateFunction } from "react-router";

export default function Products(){
  const navigate: NavigateFunction = useNavigate();

  function toSingleProduct():void {
    navigate("/SingleProduct")
  }
    return(
        <>
        <Header />
        <section  className="grid  grid-cols-3 place-items-center gap-y-18 my-38">
            <section onClick={toSingleProduct} className="flex flex-col cursor-pointer justify-between p-4 bg-[#2a2a2b] text-[#B1A7A6] hover:text-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:bg-[#0B090A] h-144 w-max">
              <div className="bg-white w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#D3D3D3] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>
            <section onClick={toSingleProduct} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>
            <section onClick={toSingleProduct} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>
            <section onClick={toSingleProduct} className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] border border-[#B1A7A6] bg-[#F5F3F4] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white border border-[#B1A7A6] w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>
            <section className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] bg-[#B1A7A6] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>
            <section className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] bg-[#B1A7A6] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>
            <section className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b] bg-[#B1A7A6] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white w-100 h-90 max-h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-400 w-4 h-4"></p>
              <h1 className="text-3xl  mt-4">R {12635.00}</h1>
            </section>

            <section className="flex flex-col cursor-pointer justify-between  p-4 text-[#2a2a2b]  bg-[#B1A7A6] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white w-100 h-86 max-h-90"></div>
              <h1 className="text-4xl  w-90 line-clamp-2 mb-4">Smart alarm speaker</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-blue-400 w-4 h-4"></p>
              <h1 className="text-3xl mt-4">R {12635.00}</h1>
            </section>

            <section className="flex flex-col cursor-pointer justify-between p-4 text-[#2a2a2b]  bg-[#B1A7A6] hover:bg-[#D3D3D3] hover:scale-101 transition delay-150 duration-300 hover:text-[#0B090A] h-144 w-max">
              <div className="bg-white w-100 h-90"></div>
              <h1 className="text-4xl w-90 line-clamp-2 mb-4">Apple Watch Ultra 3 Titanium Case with Ocean Band</h1>
              <p className="text-[#161A1D] mb-4">Apple</p>
              <p className="border rounded-full bg-amber-900 w-4 h-4"></p>
              <h1 className="text-3xl mt-4">R {12635.00}</h1>
            </section>
          </section>
          <section className="flex justify-center m-8">
            <button className="p-4 px-8  border border-[#B1A7A6] cursor-pointer">Load more</button>
          </section>
        <Footer />
        </>
    )
}