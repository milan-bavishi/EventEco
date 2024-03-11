
const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const eventRoutes = require("./routes/event");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");
// const contactUsRoute = require("./routes/Contact");
const Addperson = require("./model/Addperson");
const dbConnect = require("./config/connect");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
dbConnect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors()); 


//routes
app.use("/auth", userRoutes);
app.use("/event",eventRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);


//def route
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.get('/dashboard/resgistrationdata',(req,res)=>{
		Addperson.find()
		.then(Addperson => res.json(Addperson))
		.catch(err => res.json(err))
})
app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})