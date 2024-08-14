import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import userRouter from './routes/userRoutes.js';
import data_livingroom from './data_livingroom.js';
import data_bedroom from './data_bedroom.js';
import data_diningroom from './data_diningroom.js';
import data_sectional from './data_sectional.js';
import data_woodentemple from './data_woodentemple.js'
import data_cooler from './data_Cooler.js';
import data_table from './data_table.js';
import {dirname} from 'path'
import path from 'path'
import data_chair from './data_chair.js';
import data_officechair from './data_officechair.js';
import data_mattress from './data_mattress.js';
import data_wardrobe from './data_wardrobe.js';
import data_centertable from './data_centertable.js';
import data_shoerack from './data_shoerack.js';
import data_Cabinate from './data_cabinate.js';
import data_luxurious from './data_luxurious.js';
import razorpayRoutes from './razorpayRoutes.js';
import bodyParser from 'body-parser';

dotenv.config(); //fetches variables from dotenv file
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log(err.message);
  });

const app = express(); //creating express app
app.use(express.static('static'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

//url, function that responds to object 
app.get('/api/products/livingroom', (req, res) => {
    res.send(data_livingroom.products);
    console.log(data_livingroom.products);
});
app.get('/api/products/sectional', (req, res) => {
    res.send(data_sectional.products);
    console.log(data_sectional.products);
});
app.get('/api/products/cooler', (req, res) => {
    res.send(data_cooler.products);
    console.log(data_cooler.products);
});
app.get('/api/products/Woodentemple', (req, res) => {
    res.send(data_woodentemple.products);
    console.log(data_woodentemple.products);
});
app.get('/api/products/table', (req, res) => {
    res.send(data_table.products);
    console.log(data_table.products);
});
app.get('/api/products/chair', (req, res) => {
    res.send(data_chair.products);
    console.log(data_chair.products);
});
app.get('/api/products/officechair', (req, res) => {
    res.send(data_officechair.products);
    console.log(data_officechair.products);
});
app.get('/api/products/bedroom', (req, res) => {
    res.send(data_bedroom.products);
    console.log(data_bedroom.products);
});
app.get('/api/products/mattress', (req, res) => {
    res.send(data_mattress.products);
    console.log(data_mattress.products);
});
app.get('/api/products/wardrobe', (req, res) => {
    res.send(data_wardrobe.products);
    console.log(data_wardrobe.products);
});
app.get('/api/products/centertable', (req, res) => {
    res.send(data_centertable.products);
    console.log(data_centertable.products);
});
app.get('/api/products/shoerack', (req, res) => {
    res.send(data_shoerack.products);
    console.log(data_shoerack.products);
});
app.get('/api/products/cabinate', (req, res) => {
    res.send(data_Cabinate.products);
    console.log(data_Cabinate.products);
});
app.get('/api/products/diningroom', (req, res) => {
    res.send(data_diningroom.products);
    console.log(data_diningroom.products);
});
app.get('/api/products/luxurious', (req, res) => {
    res.send(data_luxurious.products);
    console.log(data_luxurious.products);
});

app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/razorpay', razorpayRoutes);

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://127.0.0.1:${port}`);
});