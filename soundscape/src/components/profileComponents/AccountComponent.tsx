import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * The AccountComponent is a React component that is used to render the account settings page.
 * It displays the user's current profile information, such as their email, display name, and address.
 * The user can update their profile information by filling out the form fields and clicking the "Update" button.
 * The component also renders a link to the user's profile page.
 */
export default function AccountComponent() {
    return (
        <>
            <section className="mt-30">
                <h1 className="text-5xl mb-14">Account Details</h1>
                <div className="flex gap-4 items-center mb-8">
                    <Avatar className="w-18 h-18">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="">Welcome to your profile! This is where you're able to update your account information, So things like your email, password, address and display name.</p>
                </div>
                <section className="flex flex-col gap-8 text-neutral-800">

                    <fieldset className="border border-[#5b5a5a]  px-1.5 rounded">
                        <legend>Email</legend>
                        <input className="pl-0 pb-2" placeholder="josh@gmail.com" type="email" />
                    </fieldset>
                    <fieldset className="border border-[#5b5a5a] px-1.5 rounded">
                        <legend>Display name</legend>
                        <input className="pl-0 pb-2" placeholder="Morty Sanchez" type="text" />
                    </fieldset>
                    <fieldset className="border border-[#5b5a5a] px-1.5 rounded">
                        <legend>Password</legend>
                        <input className="pl-0 pb-2" placeholder="your stuff" type="password" />
                    </fieldset>
                    <fieldset className="border border-[#5b5a5a] py-8 px-1.5 rounded">
                        <legend >Address</legend>
                        <input className="pl-0 pb-2" type="text" />
                    </fieldset>
                </section>
                <button className="border border-[#5b5a5a] cursor-pointer hover:bg-[#D3D3D3] transition px-24 py-2 mt-8">Update</button>
            </section>
        </>
    )
}