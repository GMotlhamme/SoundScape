export default function registerUserController(req, res){
    const {username, email, password}= req.body;

    res.json({
        message: "User registered successfully",
        user: {
            username,
            email, 
            password
        }
    })
}