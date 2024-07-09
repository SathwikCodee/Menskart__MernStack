const port = 4000;
const express = require("express")
const app =express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");



app.use(express.json());
app.use(cors());

// data base connection with mongoose

mongoose.connect("mongodb+srv://sathwik:123123123@cluster0.n4n9da1.mongodb.net/menskart")

app.get("/",(req,res)=>{
    res.send("Express app is running")
})

//API
app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port "+port)
    }
    else{
        console.log("Error:"+error)
    }
})

//image storage function
//cb-call back

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//creating upload endpoint for images

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{

    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating products

const Product = mongoose.model("product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    available:{
        type:Boolean,
        default:true,
    }
})

// schema for adding product 

app.post('/addproduct', async (req,res)=>{
    let products = await Product.find({}) // we can get all the products here.
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0]
        id = last_product.id+1
    }
    else{
        id =1; 
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(product);

    await product.save()
    console.log("Save")
    res.json({
        success:true,
        name:req.body.name,
    })
})

//schema for removing objects

app.post('/removeproduct', async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("removed")
    res.json({
        success:true,
        name:req.body.name
    })
})


// for new collections
// creating api for getting all the products
app.get('/newcollections', async (req,res)=>{
    let products = await Product.find({})
    let newcollections = products.slice(0).slice(-6);
    console.log("All products fetched")
    res.send(newcollections)
})

app.get('/allproducts', async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All products fetched");
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
});


//schema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//creating end point for registering the user

app.post('/signup',async (req,res)=>{

    let check = await Users.findOne({email:req.body.email});

    if(check){
        return res.status(400).json({success:false,errors:"Existing user found with same email address.."})

    }

    let cart={};
    for (let i=0;i<300;i++){
        cart[i]=0;
    }

    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save()

    const data = {
        user:{
            id:user.id
        }
    }

    //generating a token for secure purpose (not readable)
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating end ponit for user login

app.post('/login', async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});

    if (user){
        const passCompare = req.body.password === user.password;

        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom')
            res.json({success:true,token})
        }
        else{
            res.json({success:false,errors:"wrong password"})
        }
    }
    else{
        res.json({success:false,errors:"wrong email id"
        })
    }
})

//create middleware to fetch user for user id
const fethUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"please authenticate using valid email"})
    }
    else{
        try{
            const data= jwt.verify(token,'secret_ecom') // to decode the token
            req.user = data.user;
            next();
        }
        catch(error){
            res.status(401).send({errors:"Please authenticate with a valid token"})
        }
    }
}
 

// creating end point for add to cart

app.post('/addtocart',fethUser,async (req,res)=>{
    console.log("added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("ADDED")
})  

// creating end point for remove from cart

app.post('/removefromcart',fethUser,async (req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")
})  


// creating end point for getCart

app.post('/getcart',fethUser,async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
}) 



  