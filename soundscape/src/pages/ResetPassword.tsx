import {
    useSearchParams,
    useNavigate
} from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
    Card,
    CardContent
} from "@mui/material";
import { toast } from "react-toastify";

export default function ResetPassword(){
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const userId = searchParams.get("id");
    const token = searchParams.get("token");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newPassword = data.get("newPassword");
        const confirmPassword = data.get("confirmPassword");
        if (newPassword !== confirmPassword)
            toast.error(`New Password and 
                         Confirm Password do not match !`, {
                autoClose: 5000,
                position: "top-right",
            });
        else {
            const url = import.meta.env.VITE_APP_BACKEND_URL 
                                        + "/api/reset-password";
            const res = await axios.post(url, {
                password: newPassword,
                token: token,
                userId: userId,
            });
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
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        }
    
    }
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
                            Reset Password
                        </h1>

                        <Box component="form"
                             onSubmit={handleSubmit} 
                             sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                label="New Password"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                label="Confirm Password"
                            />
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition duration-300"
                            >
                                Submit
                            </button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>

        </>
    )
}