import { Button } from "@/components/ui/button"
import { useNavigate, type NavigateFunction } from "react-router";



export default function Header(){
  const navigate: NavigateFunction = useNavigate();

  function toProducts():void{
    navigate("/Products")
  }

    return (
      <>
      {/* bg-[#f0ede0]  bg-[url('/SoundwaveLogo.png')]*/}
        <section className="flex pl-4 fixed w-full top-0 border-b z-10 justify-between items-center  p-4 bg-[#F5F3F4]">
          <div className="  h-15 w-45 bg-contain bg-no-repeat "></div>

          <nav className="flex gap-4 ">
            <Button variant="ghost" onClick={toProducts} className="cursor-pointer text-sm font-medium">Products</Button>
            <Button variant="ghost" className="cursor-pointer text-sm font-medium">Community</Button>
            <Button variant="ghost" className="cursor-pointer text-sm font-medium">Support</Button>
          </nav>

            <section className="flex justify-center items-center gap-4 pr-8">
                <search className=" bg-white rounded-2xl">
                    <input placeholder="Search" className="bg-white rounded-l-2xl p-2" type="text" />
                  <i className="bi bi-search pr-4 cursor-pointer"></i>
                </search>
                <nav className="flex gap-4">
                    <button className="cursor-pointer text-xl"><abbr title="Profile"><i className="bi bi-person-circle "></i></abbr></button>
                    <button className="cursor-pointer text-xl"><abbr title="Wishlist"><i className="bi bi-heart"></i></abbr></button>
                    <button className="cursor-pointer text-xl"><abbr title="checkout"><i className="bi bi-cart"></i></abbr></button>
                </nav>
            </section>
        </section>
      </>
    );
}