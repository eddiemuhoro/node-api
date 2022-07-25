import express from 'express'
import dotenv from "dotenv"
dotenv.config();
import router from './routes/goalRoutes.js';
import mongoose from 'mongoose';


    // try{
    //     const conn= await mongoose.connect(process.env.RESTREVIEWS_DB_URI)

    //     console.log(`MongoDB Connected: ${conn.connection.host}`)
    // }catch (error){
    //     console.log(error)
    //     process.exit(1)
    // }
    const port= process.env.PORT || 5000
    
    mongoose.connect(process.env.REVIEWS_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })

    const connection= mongoose.connection;

    connection.on("error", (error)=> console.log(error));
    connection.once("open", ()=> console.log("connected"))





const app = express()

//accepting body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', router)
app.listen(port, () => console.log(`Listening on port ${port}`))


