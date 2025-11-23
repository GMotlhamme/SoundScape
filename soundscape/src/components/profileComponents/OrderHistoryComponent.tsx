import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Order } from "@/types/systemTypes"
import { useState } from "react";
import { Link } from "react-router";

/**
 * A React component that is used to render the order history page.
 * It displays all the orders that the user has made, with each order being displayed in a section element.
 * The component also renders a link to the user's profile page.
 * The component sends each order's data to the SingleProduct page when an order is clicked.
 */
export default function OrderHistoryComponent(){
     const [orderItem, setOrderItem] = useState<Order[]>(
    [
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
    ]);
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
                    {orderItem.map((item, index)=>
                    <section key={index} className="border border-[#B1A7A6] h-max w-max cursor-pointer p-4 ">
                    <Link to={"/SingleProduct"} state={item}  >
                    <div>
                        <div className="flex items-center gap-4">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                    <div>x{item.quantity}</div>
                            </div>
                    <div className="">{item.date}</div>
                        <p className="w-90 line-clamp-2">{item.description}</p>
                    </div>
                    </Link>
                    </section>)}
                </section>
                </section>
            </section>
        </>
    )
}