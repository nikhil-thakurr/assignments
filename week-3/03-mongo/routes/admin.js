const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} =require("../db/index")

// Admin Routes
router.post('/signup', async(req, res) => {
    const user = req.body ;
    try {
      const admin = new Admin({
        username:user.username,
        password:user.password
      })

      await admin.save();

      res.json({
        msg:"Admin created successfully"
      })
    }
    catch(err){
        res.status(400).send("ERROR : "+ err);
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    const {title,description,price,imageLink } = req.body ;
    try {

        const course = new Course ({
            title ,description,price,imageLink
        })

        await course.save();

        res.json({
            msg:"Course Created Succesfully"
            ,data : course._id
        })
       
    }
    catch(err){
        res.status(400).send("ERROR : "+err);
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic

    const {title,description,price,imageLink } = req.body ;
    try {


        const  courses = await Course.find({});


        res.json({
            Courses : courses
        })
       
    }
    catch(err){
        res.status(400).send("ERROR : "+err);
    }
});

module.exports = router;