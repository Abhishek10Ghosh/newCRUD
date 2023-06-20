const mongoose = require("mongoose");

const DB ="mongodb+srv://abhishek10ghosh:abhishekghosh@cluster0.jcgg9tc.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error) => console.log(error.message));