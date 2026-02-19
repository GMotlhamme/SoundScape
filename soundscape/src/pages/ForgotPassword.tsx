
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
    Card,
    CardContent
} from "@mui/material";
import { toast } from "react-toastify";

export default function ForgotPassword() {
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const url = import.meta
                        .env
                        .VITE_APP_BACKEND_URL + "/api/forgot-password";
        const res = await axios.post(url, { email: email });
        if (res.data.success === false) {
            toast.error(res.data.message, {
                autoClose: 5000,
                position: "top-right",
            });
        } else {
            toast.success(res.data.message, {
                autoClose: 5000,
                position: "top-right",
            });
        }}
    return(
        <>
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Card sx={{ boxShadow: "4" }}>
                    <CardContent sx={{ m: 3 }}>
                        <h1 className="text-3xl text-center mt-2 mb-4">
                            Forgot Password
                        </h1>

                        <Box component="form"
                            onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition duration-300"
                            
                            >
                                Reset Password
                            </button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
        </>
    )
}