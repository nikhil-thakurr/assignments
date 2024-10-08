const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const user = req.body ;
    try {
      const admin = new User({
        username:user.username,
        password:user.password
      })

      await admin.save();

      res.json({
        msg:"User created successfully"
      })
    }
    catch(err){
        res.status(400).send("ERROR : "+ err);
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router