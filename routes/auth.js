const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config= require('config');
const jwt= require('jsonwebtoken');
const auth = require('../middleware/auth');

const Student = require('../models/Student');

router.post('/', (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({msg: 'Please enter all Details'});
    }

    Student.findOne({ email })
    .then(student => {
        if(!student) return res.status(400).json({msg: 'Student does not exists'});

        bcrypt.compare(password, student.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({msg : 'Invalid Credentials'});

            jwt.sign(
                {id: student.id},
                config.get('jwtSecret'),
                {expiresIn : 3600 },
                (err, token) => {
                    if(err) throw err;
                    res.json({
                        token,
                        student: {
                            id: student.id,
                            firstName: student.firstName,
                            lastName: student.lastName,
                            email: student.email
                        }
                    })
                }
            )
        })            
    })
});

router.get('/', auth, (req,res) => {
    Student.findById(req.student.id)
    .select('-password')
    .then(student => res.json(student));
})

module.exports = router;