import { Button } from "@/components/ui/button"



export default function Header(){
    return (
      <>
      {/* bg-[#f0ede0]  bg-[url('/SoundwaveLogo.png')]*/}
        <section className="flex pl-4 justify-between items-center p-4">
          <div className="  h-15 w-45 bg-contain bg-no-repeat "></div>

          <nav className="flex gap-4">
            <Button variant="ghost" className="cursor-pointer text-sm font-medium">Products</Button>
            <Button variant="ghost" className="cursor-pointer text-sm font-medium">Community</Button>
            <Button variant="ghost" className="cursor-pointer text-sm font-medium">Support</Button>
          </nav>

            <section className="flex justify-center items-center gap-4 pr-8">
                <search>
                    <input className="bg-gray-100 rounded-2xl p-2" type="text" />
                </search>
                <nav className="flex gap-4">
                    <button className="cursor-pointer text-xl"><i className="bi bi-person-circle "></i></button>
                    <button className="cursor-pointer text-xl"><i className="bi bi-heart"></i></button>
                    <button className="cursor-pointer text-xl"><i className="bi bi-cart"></i></button>
                </nav>
            </section>
        </section>
      </>
    );
}