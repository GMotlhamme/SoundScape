import Footer from "@/components/FooterComponent";
import Header from "@/components/HeaderComponent";

export default function Community() {
    const pastEvents = [
        {
            id: 1,
            title: "Summer Music Fest 2023",
            date: "June 15, 2023",
        },
        {
            id: 2,
            title: "Winter Beats 2023",
            date: "December 10, 2023",
        },
        {
            id: 3,
            title: "Spring Soundwave 2024",
            date: "April 20, 2024",
        }
    ]

    const upcomingEvents = [
        {
            id: 1,
            title: "Autumn Acoustic Sessions",
            location: "Central Park",
            date: "September 30, 2024",
        },
        {
            id: 2,
            title: "Holiday Harmonies",
            location: "Downtown Arena",
            date: "December 15, 2024",
        },
        {
            id: 3,
            title: "New Year Noise",
            location: "City Square",
            date: "January 5, 2025",
        }
    ]

    return (
        <>
            <Header />
            <section className="flex justify-around min-h-screen h-max pt-30 ">
                <article className="">
                    <h1 className="text-4xl w-150">Take this opportunity to engage in our community</h1>
                    <section className=" ">
                        {pastEvents.map((event , index) =>
                            <div key={index} className=" w-200 h-100 rounded-2xl my-18 border-none relative cursor-pointer flex">
                                <img className=" z-2 relative border-none w-full h-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="event picture" />
                                <div className="p-4 z-4 place-content-end transition absolute w-full h-full opacity-50 rounded-2xl hover:opacity-100 hover:backdrop-blur-md text-xl text-white font-bold">
                                    <p>{event.title}</p><p className="text-sm">{event.date}</p>
                                </div>

                            </div>)}
                    </section>
                </article>
                <section className=" mx-20 mt-20 h-max w-max ">
                    <div className="fixed -z-10 right-10 top-32 border border-[#B1A7A6]">
                    <h1 className="text-xl border p-4 border-b-[#B1A7A6]">Upcoming Events</h1>
                    {upcomingEvents.map((communityUpcomingEvent, index) => 
                    <section key={index} className=" border border-b-[#B1A7A6] h-max w-max cursor-pointer p-4 ">
                        <div>
                            <div className="flex items-center gap-4">
                                <h3 className="text-xl font-semibold">{communityUpcomingEvent.title}</h3>
                                <div></div>
                            </div>
                            <div className="">{communityUpcomingEvent.date}</div>
                            <p className="w-90 line-clamp-2">{communityUpcomingEvent.location}</p>
                        </div>
                    </section>)}
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}