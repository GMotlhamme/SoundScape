import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function Support(){
    const [phone, setPhone] = useState("");
  const [contactForm, setContactForm] = useState<{
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
  }>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
    return(
        <>
        <Header/>
        <section className="flex my-44 mx-8">
        
        <section className="bg-[#D3D3D3] dark:bg-zinc-900  p-8 col-1 row-2 md:row-1">
          <h1 className="dark:text-white text-4xl mb-7">
            Reach out for any enquiries we could assist with and we'll get back to you
          </h1>
          <form  className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="full-name" className="dark:text-white">
                  Full Name:
                </label>
                <input
                  placeholder="Greg Jackson"
                  type="text"
                  name="full-name"
                //   value={contactForm.name}
                //   onChange={(e) =>
                //     setContactForm({
                //       ...contactForm,
                //       name: e.target.value,
                //     })
                //   }
                  required
                  className="p-2 text-lg bg-white h-10 rounded inset-shadow-sm border border-zinc-200"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="company" className="dark:text-white ">
                  Company:
                </label>
                <input
                  placeholder="Chase"
                  type="text"
                  name="company"
                //   value={contactForm.company}
                //   onChange={(e) =>
                //     setContactForm({
                //       ...contactForm,
                //       company: e.target.value,
                //     })
                //   }
                  required
                  className="p-2 text-lg bg-white h-10 rounded inset-shadow-sm border border-zinc-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="dark:text-white">
                Email:
              </label>
              <input
                type="email"
                name="email"
                // value={contactForm.email}
                // onChange={(e) =>
                //   setContactForm({
                //     ...contactForm,
                //     email: e.target.value,
                //   })
                // }
                required
                placeholder="jackson@gmail.com"
                className="p-2 bg-white text-black h-10 rounded w-full inset-shadow-sm border border-zinc-200"
              />
              <PhoneInput
                containerClass="w-full bg-[#F5F3F4] flex items-center gap-2 inset-shadow-sm border  rounded"
                inputClass="!w-full !h-10 !text-black bg-white"
                inputProps={{ name: "phone" }}
                placeholder="082 123 4567"
                country={"za"}
                value={phone}
                onChange={(value: string) => setPhone(value)}
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="message" className="dark:text-white">
                Message:
              </label>
              <textarea
                name="message"
                required
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    message: e.target.value,
                  })
                }
                placeholder="Type your message"
                className="p-2 inset-shadow-sm border border-zinc-200 bg-white text-black h-50 rounded"
              ></textarea>
            </div>

            <button className="text-white bg-black h-10 rounded mt-5 cursor-pointer shadow-md active:shadow-none hover:text-amber-300 dark:hover:border-amber-400  dark:hover:text-amber-500 dark:text-green">
              Send Message
            </button>
          </form>
        </section>

        <section className="border border-[#B1A7A6] h-180 w-220 m-8">
                <div className="bg-[url('/Hands.jpg')] w-full h-full bg-cover bg-no-repeat"> </div>
        </section>
        </section>
        <Footer/>
        </>
    )
}