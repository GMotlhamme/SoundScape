import axios from "axios"
import { useState } from "react";

export default function UploadProduct() {
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

            const result = await axios.post(`${import.meta.env.VITE_UPLOAD_URL}`, formData);
            console.log(result);
            setLoading(false);
            form.reset();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form className="m-8 border" onSubmit={handleSubmit} encType="multipart/form-data" >
                <input required className="bg-amber-600 m-4" type="file" name="photos" id="photos" multiple />
                <fieldset className=" m-4">
                    <legend >Name</legend>
                    <input required className="bg-amber-600" type="text" id="name" name="name"/>
                </fieldset>
                <fieldset className=" m-4">
                    <legend >Brand</legend>
                    <input required className="bg-amber-600" type="text" id="brand" name="brand" />
                </fieldset>
                <fieldset className=" m-4">
                    <legend >Description</legend>
                    <input required className="bg-amber-600" type="text" id="description" name="description" />
                </fieldset>
                <fieldset className=" m-4">
                    <legend >Category</legend>
                    <input required className="bg-amber-600" type="text" id="category" name="category"/>
                </fieldset>
                <fieldset className=" m-4">
                    <legend >price</legend>
                    <input required className="bg-amber-600"  type="number" id="price" name="price"/>
                </fieldset>
                {loading ? <button type="button" className="bg-black text-white m-4 p-4">loading</button> : <button className="bg-black text-white m-4 p-4 cursor-pointer">submit</button>}
            </form>
        </>
    )
}
