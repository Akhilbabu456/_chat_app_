const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    }catch(err){
        console.log(`Error: ${err.message}`.red.bold)  
        process.exit()
    }
}

module.exports = connectDB