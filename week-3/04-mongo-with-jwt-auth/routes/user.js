const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', (req, res) => {
    const username = req.body.username;

    const user = User.find({
        username
    })
    if(user) {
        const token = jwt.sign({
            username,
        }, JWT_SECRET);
        
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Incorrect credentials"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({
        allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseID = req.params.courseId;

    await User.updateOne({
        username,
    },{
        "$push": {
            purchasedCourses: courseID
        }
    })
    res.json({
        message: 'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic

    const username = req.username;

    const user = await User.findOne({
        username
    })

    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router