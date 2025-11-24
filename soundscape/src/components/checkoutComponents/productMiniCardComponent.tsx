export default function ProductMiniCardComponent(props: string | number| any){
    return(
        <>
            <div className="relative">
        <section className="flex border border-[#D3D3D3] pl-4 pr-22 py-4 w-max bg-white rounded-lg  gap-4">

           
            <div className="w-32 h-32 ">
                <img className="w-full h-full object-cover" src="item" alt="item name" />
            </div>
            <div className="flex flex-col justify-around px-4">
                <h3 className="flex font-semibold text-md gap-2 line-clamp-2">{props.brand} brand  <p>- {props.name} item name</p></h3>
                <div className="flex gap-4">
                    <p className="">{props.category}category</p>
                    <p className="">{props.quantity}quantity</p>
                </div>
                <p>price</p>
            </div>
            <div onClick={() => {}} className="relative place-content-center h-max rounded top-0 -right-16  bg-[#A4161A] text-white px-2 cursor-pointer">
                x
            </div>
        </section>
             </div>
        </>
    )
}