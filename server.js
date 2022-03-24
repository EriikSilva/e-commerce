const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/react-add-to-cart-db",{
    useNewUrlParser: true,
    useUnifiedTopology:true, 
})

const Product = mongoose.model(
    "products",
    new mongoose.Schema({
    id: {type: String, default: shortid.generate},
    nome: String,
    categoria: String,
    imagem: String,
    preco: Number,
    material: String,
    departamento: String,
    descricao: String,
}))

app.get("/api/products", async (req, res)=> {
    const products = await Product.find({});
    res.send(products)

})

app.post("/api/products", async (req, res)=> {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
})

app.delete("/api/products/:id", async (req, res)=> {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
})

const Order = mongoose.model("order", new mongoose.Schema({
    id:{
        type: String,
        default: shortid.generate
    },
    email: String,
    name:String,
    address: String,
    total: Number,
    cartItems: [{
        id:String,
        nome: String,
        preco: Number,
        count: Number
    }]
},
    {timestamps:true}
)
);

app.post("/api/orders", async(req, res)=> {
    if(!req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems){
        return res.send({message: "Dados sao obrigatorios para a finalizacao"})
    }

    const order = await Order(req.body).save();
    res.send(order);

})

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("server esta em: http://localhost:3030"))

