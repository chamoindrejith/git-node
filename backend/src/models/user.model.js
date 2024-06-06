const{Schema, model} = require("mongoose");

const UserSchema = Schema({
    name: {
        type : String,  
        required: true
    },
    email: {
        type : String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true,
        unique: true
    },
    role :{
        type : String,
        enum : ["ADMIN", "USER"],
        default: "USER"
    }
},
{
    timestapms : {createdAt: "created_at", updatedAt: "updated_at"}
}
);

const User = model("User", UserSchema); // Create the model User

module.exports = User; // Export the User