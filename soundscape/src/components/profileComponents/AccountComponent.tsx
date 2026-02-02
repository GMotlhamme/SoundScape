import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import axios from "axios";
import { useEffect, useState } from "react";

interface Profile {
    username: string;
    email: string;
    password?: string;
}
/**
 * The AccountComponent is a React component that is used to render the account settings page.
 * It displays the user's current profile information, such as their email, display name, and address.
 * The user can update their profile information by filling out the form fields and clicking the "Update" button.
 * The component also renders a link to the user's profile page.
 */
export default function AccountComponent() {
    const [currentProfile, setCurrentProfile] = useState<Profile>({
        username: "",
        email: ""
    });
        const [editProfile, setEditProfile] = useState<Profile>({
        username: "",
        email: "",
      });

    async function FetchProfile() {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            const response = await axios.get(`${import.meta.env.VITE_USER_PROFILE_URL}`)
            setCurrentProfile({ username: response.data.user.username, email: response.data.user.email });


        } catch (error) {
            console.error("Error fetching profile:", error);
        }

    }
    useEffect(() => {
        FetchProfile();
    }, [])
        async function EditProfile() {
        try {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("token")}`;
           await axios.patch(
            `${import.meta.env.VITE_USER_PROFILE_URL}`,
            {
              username: editProfile.username,
              email: editProfile.email,
            }
          );
        } catch (error) {
          console.error("Error editing profile:", error);
        }
      }
    return (
        <>
            <section className="mt-30">
                <h1 className="text-5xl mb-14">Account Details</h1>
                <div className="flex gap-4 items-center mb-8">
                    <Avatar className="w-18 h-18">
                        <AvatarFallback>{currentProfile.username.split(" ").map(n => n[0]).join("").toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <p className="">Welcome to your profile! This is where you're able to update your account information, So things like your email, password, address and display name.</p>
                </div>
                <section className="flex flex-col gap-8 text-neutral-800">
                    {currentProfile &&

                        <form action={EditProfile}>

                            <fieldset className="border border-[#5b5a5a] px-1.5 rounded">
                                <legend>Email</legend>
                                <input className="pl-0 pb-2" placeholder={currentProfile.email} value={editProfile.email}
                        onChange={(e) =>
                          setEditProfile({ ...editProfile, email: e.target.value })} type="email" />
                            </fieldset>

                            <fieldset className="border border-[#5b5a5a] px-1.5 rounded">
                                <legend>Display name</legend>
                                <input className="pl-0 pb-2" placeholder={currentProfile.username} value={editProfile.username}
                        onChange={(e) =>
                          setEditProfile({ ...editProfile, username: e.target.value })} type="text" />
                            </fieldset>

                            <fieldset className="border border-[#5b5a5a] px-1.5 rounded">
                                <legend>Password</legend>
                                <input className="pl-0 pb-2" placeholder="your stuff" value={editProfile.password}
                         type="password" />
                            </fieldset>
                            <button className="border border-[#5b5a5a] cursor-pointer hover:bg-[#D3D3D3] transition px-24 py-2 mt-8">Update</button>
                        </form>
                    }

                </section>
            </section>
        </>
    )
}