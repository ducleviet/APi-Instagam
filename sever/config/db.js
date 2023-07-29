const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONDODB_URI);
        console.log(`Databas Connection : ${conn.connection.host}`);
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;