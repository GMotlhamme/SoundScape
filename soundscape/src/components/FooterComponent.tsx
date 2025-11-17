

export default function Footer() {
    return (
        <>
            <section className="bg-[#0B090A] text-gray-600 w-full flex justify-start py-24 p-20 gap-40">

                <section className="flex flex-col gap-4">
                    <h1 className="text-white text-lg">Support</h1>
                    <p className="cursor-pointer hover:text-gray-500">Buy Authentic</p>
                    <p className="cursor-pointer hover:text-gray-500">Where to Buy</p>
                    <p className="cursor-pointer hover:text-gray-500">Warranty Request</p>
                    <p className="cursor-pointer hover:text-gray-500">FAQs</p>
                    <p className="cursor-pointer hover:text-gray-500">Accessibility</p>
                    <p className="cursor-pointer hover:text-gray-500">Product Support</p>
                </section>
                <section className="flex flex-col gap-4">
                    <h1 className="text-white text-lg">Our Company</h1>
                    <p className="cursor-pointer hover:text-gray-500">About Us</p>
                    <p className="cursor-pointer hover:text-gray-500">Find a Store</p>
                    <p className="cursor-pointer hover:text-gray-500">ESG</p>
                    <p className="cursor-pointer hover:text-gray-500">Careers</p>
                    <p className="cursor-pointer hover:text-gray-500">Press Room</p>
                    <p className="cursor-pointer hover:text-gray-500">Partnerships & Licensing</p>
                </section>
                <section className="flex flex-col gap-4">
                    <h1 className="text-white text-lg">Resources</h1>
                    <p className="cursor-pointer hover:text-gray-500">Design</p>
                    <p className="cursor-pointer hover:text-gray-500">Inspirations</p>
                    <p className="cursor-pointer hover:text-gray-500">Libraries</p>
                    <p className="cursor-pointer hover:text-gray-500">Technologies</p>
                    <p className="cursor-pointer hover:text-gray-500">Hardware</p>
                </section>

                <section className="text-3xl gap-4 flex">
                    <i className="bi bi-instagram cursor-pointer hover:text-gray-500"></i>
                    <i className="bi bi-facebook cursor-pointer hover:text-gray-500"></i>
                    <i className="bi bi-twitter-x cursor-pointer hover:text-gray-500"></i>
                </section>
            </section>
            <section className="flex justify-center text-white bg-[#0B090A] p-8 text-sm"><p>&copy; Soundwave. Gomolemo Motlhamme. All rights reserved.</p></section>
        </>
    )
}