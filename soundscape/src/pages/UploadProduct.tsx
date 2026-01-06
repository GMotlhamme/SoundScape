import axios from "axios"

export default function UploadProduct() {
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

            const result = await axios.post('http://localhost:4000/api/products', formData);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form className="m-8 border" onSubmit={handleSubmit} encType="multipart/form-data" >
                <input className="bg-amber-600 m-4" type="file" name="photos" id="photos" multiple />
                <fieldset className=" m-4">
                    <legend >Name</legend>
                    <input className="bg-amber-600" type="text" id="name" name="name"/>
                </fieldset>
                <fieldset className=" m-4">
                    <legend >Brand</legend>
                    <input className="bg-amber-600" type="text" id="brand" name="brand" />
                </fieldset>
                <fieldset className=" m-4">
                    <legend >Description</legend>
                    <input className="bg-amber-600" type="text" id="description" name="description" />
                </fieldset>
                <fieldset className=" m-4">
                    <legend >Category</legend>
                    <input className="bg-amber-600" type="text" id="category" name="category"/>
                </fieldset>
                <fieldset className=" m-4">
                    <legend >price</legend>
                    <input className="bg-amber-600"  type="number" id="price" name="price"/>
                </fieldset>
                <button className="bg-black text-white m-4 p-4">submit</button>
            </form>
        </>
    )
}
