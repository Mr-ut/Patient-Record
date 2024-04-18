const mongoose = require('mongoose');
const connectDB = async ()=>{

    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect('mongodb+srv://utkarshraj936:I7ze0PbyjMTNMrTx@patientdetails.ouzvxa3.mongodb.net/',{
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        console.log(`Database connected :${conn.connect.host}`);
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDB;