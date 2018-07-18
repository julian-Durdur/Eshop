import express from 'express'
// import volleyball from 'volleyball'
// app.use(volleyball)
const { PORT,DB_url } = process.env
import mongoose from   'mongoose'
mongoose.connect(DB_url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function (){
    console.log(`[Mongo DB] connection OK!`);
});
import "dotenv/config"


import { productRouter } from './routes/product'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/product", productRouter)
app.listen( PORT, () => {
    console.log(`[APP running on port : ${PORT}]`);
})


