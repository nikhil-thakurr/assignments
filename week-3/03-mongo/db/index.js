const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://nt34542:nikhil@connect.m4hlb.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String
    },
    password :{
        type:String
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String
    },
    password :{
        type:String
    },
    purchasedCourses :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Courses'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here

    title:{
        type:String 
    },
    description:{
        type:String 
    },
    price:{
        type:Number 
    },
    imageLink:{
        type:String 
    },
    published:{
        type:String 
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}