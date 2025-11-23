import Header from "@/components/HeaderComponent"
import "../style/colourTheme.css";
import AccountComponent from "@/components/profileComponents/AccountComponent";
import Footer from "@/components/FooterComponent";
import OrderHistoryComponent from "@/components/profileComponents/OrderHistoryComponent";
import { useState } from "react";


/**
 * A React component that renders the profile page.
 * The page includes a header, a navigation bar to switch between the account and order history pages, and a footer.
 * The account page displays the user's profile information and allows them to update it.
 * The order history page displays the user's order history.
 */
export default function Profile(){
    const [display, setDisplay] = useState<string>("account");
    return(
        <>
        <Header />
        <section className=" flex flex-row justify-center min-h-screen items-center gap-28 mb-28">
            <nav>
                <ul className="flex flex-col gap-4 w-90">
                    <li className="border border-[#B1A7A6] hover:border-[#D3D3D3] cursor-pointer rounded p-2 " onClick={() => setDisplay("account")}>Account</li>
                    <li className="border border-[#B1A7A6] hover:border-[#D3D3D3] cursor-pointer rounded p-2" onClick={() => setDisplay("history")}>My Order History</li>
                </ul>
            </nav>
            <section className=" w-180 h-screen">
                {display === "account" && <AccountComponent />}
                {display === "history" && <OrderHistoryComponent />}

            </section>
        </section>
        <Footer />
        </>
    )
}