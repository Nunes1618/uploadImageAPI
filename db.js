const mongoose = require('mongoose')

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.b588tj7.mongodb.net/`)

    console.log("Conectado ao banco.")
}

main().catch((err) => console.log(err));

module.exports = main;

