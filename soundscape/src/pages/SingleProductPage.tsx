import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SingleProductPage(){
    return(
        <>
        <Header /> 
        <section className="flex h-screen p-8 gap-16 mt-32">
<section className="flex flex-col gap-8 min-h-150 ">

        <h1 className="text-5xl">Title</h1>
        <p>Brand</p>
        <p className="w-160">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo eos est cumque facilis, facere totam at blanditiis asperiores quam aspernatur molestiae nulla autem rerum reprehenderit corrupti nesciunt itaque iusto. Vero.</p>
        <p>color</p>
        <div className="flex flex-col gap-4">
        <h2 className="text-3xl">Price</h2>
        <div className="flex gap-2">

        <button className="border border-[#B1A7A6] cursor-pointer hover:bg-[#D3D3D3] transition px-24 py-2">Add to cart</button>
        <button className="px-4 border border-[#B1A7A6] cursor-pointer text-2xl"><abbr title="Wishlist"><i className="bi bi-heart"></i></abbr></button>

        </div>
        </div>
</section>

<section className="border border-[#B1A7A6] h-150 w-180">

</section>
        </section>
        <Footer />
        </>
    )
}