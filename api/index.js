const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const submissionRoute = require("./routes/submissions");
const problemRoute = require("./routes/problems");
const testcaseRoute = require("./routes/testcases");

dotenv.config();
const corsOptions = {
    origin: '*', // or specify your frontend URL like 'http://localhost:3000'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
app.use(cors());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
.then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/run",submissionRoute);
app.use("/api/problems",problemRoute);
app.use("/api/testcases",testcaseRoute);

app.listen("5000", ()=>{
    console.log("backend is running on 5000")
});