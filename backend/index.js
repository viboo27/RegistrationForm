import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Regstration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

},()=>{
    console.log("db connect")
});

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    mobile : String,
    age : Number,
    password : String,
});

const Student = new mongoose.model("Student",userSchema);



app.post("/login",(req,res)=>{

    const {email,password} = req.body

    Student.findOne({email:email},(err,student)=>{
        if(student){
            if(password===student.password){
                console.log("user found")
                res.send({message:"Login Successfull"})
            }
            else{
                res.send({message:"Invalid Password",user:user});
            }
        }
        else{
            res.send({message:"User not registered "})
        }
    })

})
app.post("/register",(req,res)=>{

    const {name,email,mobile,age,password} = req.body;
    console.log({name , email , mobile , age , password })
    const student = new Student({
        name,
        email,
        mobile,
        age,
        password
    })
    student.save();
    // User.findOne({email:email},(err,student)=>{
    //     if(student)
    //     {
    //         res.send({message:"user already exist"});
    //     }
    //     else{
    //         student.save(err =>{
    //             if(err){
    //                 res.send({message:"error something"});
    //             }
    //             else{
    //                 res.send({message : "registered successfull"})
    //             }
    //         })
    //     }
    // })
    

})

app.post("/payment",(req,res)=>{

    res.send("My payment page");

})


app.listen(9000,()=>{
    console.log("server started at port 9000")
})