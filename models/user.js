const mongoose = require("mongoose");
const Schema = mongoose.Schema
const userSchema = new Schema ({

    name: {
        type:String,
        required:true,
    },

    lastName: {
        type:String,
        required:true,
    },

    email: {
        type:String,
        required:true,
    },

    password: {
        type:String,
        required:true,
    },

    role: {
        type:String,
        required:true,
    },

    phone:String,
        
        
    

    description:String,

});

module.exports = mongoose.model("user",userSchema)