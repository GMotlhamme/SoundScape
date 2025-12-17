import { Link } from "react-router";

export default function Register(){
    return(
        <>            
        <section className="w-full h-screen z-0">

                        <img className="object-cover w-full h-full" src="/LoginSpeaker.jpg" alt="" />

        <section className="flex justify-center items-center w-full h-full absolute backdrop-blur-xs backdrop-brightness-50 top-0 z-1">
            <form action="" className="p-4 flex flex-col  bg-neutral-700 text-white w-96 rounded-md">
                <fieldset >
                <legend id="email">Email:</legend>
                <input className="bg-neutral-200 w-full p-2 rounded" type="email" id="email" name="email" required />
                </fieldset>
                <br />
                <fieldset>
                <legend id="username">Username:</legend>
                <input className="bg-neutral-200 w-full p-2 rounded" type="text" id="username" name="username" required />
                </fieldset>
                <br />
                <fieldset>
                <label htmlFor="password">Password:</label>
                <input className="bg-neutral-200 w-full p-2 rounded" type="password" id="password" name="password" required />
                </fieldset>
                <br />
                <button type="submit" className="cursor-pointer bg-neutral-900 rounded p-2">Register</button>
                <Link to="/Login">
                <p className="flex cursor-pointer hover:text-blue-700 justify-center mt-4 text-blue-500 underline">Already have an account?</p>
                </Link>
            </form>
        </section>
            </section>
        </>
    )
}