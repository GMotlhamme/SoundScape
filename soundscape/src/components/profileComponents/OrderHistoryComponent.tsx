import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function OrderHistoryComponent(){
    interface Order{
        id: number;
        date: string;
        name: string;
        quantity?: number;
        description: string;
    }
    const orders: Order[] = [
        {
            id: 101,
            date: "March 2023",
            name: "Item",
            quantity: 3,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        },
        {
            id: 102,
            date: "February 2023",
            name: "Item",
            quantity: 1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        },
        {
            id: 103,
            date: "January 2023",
            name: "Item",
            quantity: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        },
        {
            id: 103,
            date: "January 2023",
            name: "Item",
            quantity: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        }
        ,
        {
            id: 103,
            date: "January 2023",
            name: "Item",
            quantity: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        }
        ,
        {
            id: 103,
            date: "January 2023",
            name: "Item",
            quantity: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        }
        ,
        {
            id: 103,
            date: "January 2023",
            name: "Item",
            quantity: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        }
        ,
        {
            id: 103,
            date: "January 2023",
            name: "Item",
            quantity: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        }
        ,
        {
            id: 103,
            date: "January 2023",
            name: "Item",
            quantity: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde ad molestiae ipsa alias, quasi ullam quibusdam natus neque tempore molestias, non ut excepturi, quo itaque veniam ex vel atque!"
        }
    ]
    return(
        <>
        <section className="mt-30 h-900">
                <h1 className="text-5xl mb-14">Order History</h1>
                <div className="flex gap-4 items-center mb-8">
                    <Avatar className="w-18 h-18">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="">Back to check your previous purchases!</p>
                </div>
                <section className="h-120 w-max overflow-y-scroll">

                <section className="grid grid-cols-2 gap-8 text-neutral-800 w-max pr-4 ">
                    {orders.map((item, index)=>
                    <section key={index} className="border border-[#B1A7A6] h-max w-max cursor-pointer p-4 ">
                    <div>
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                    <div>x{item.quantity}</div>
                            </div>
                    <div className="">{item.date}</div>
                        <p className="w-90 line-clamp-2">{item.description}</p>
                    </div>
                    </section>)}
                </section>
                </section>
            </section>
        </>
    )
}