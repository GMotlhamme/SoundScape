import Header from "@/components/HeaderComponent"
import "../style/colourTheme.css";
export default function Profile(){
    return(
        <>
        <Header />
        <section className=" flex flex-row justify-center min-h-screen items-center gap-8">
            <nav>
                <ul className="flex flex-col gap-4 w-90">
                    <li className="border border-[#B1A7A6] hover:border-[#D3D3D3] cursor-pointer rounded p-2 ">Account</li>
                    <li className="border border-[#B1A7A6] hover:border-[#D3D3D3] cursor-pointer rounded p-2">My Order History</li>
                    <li className="border border-[#B1A7A6] hover:border-[#D3D3D3] cursor-pointer rounded p-2">Appearance</li>
                </ul>
            </nav>
            <section className="border border-[#B1A7A6] w-180 h-max">

            </section>
        </section>
        </>
    )
}