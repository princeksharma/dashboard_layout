const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config= require('config');
const jwt= require('jsonwebtoken');

const Student = require('../models/Student');

router.post('/', (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({msg: 'Please enter all Details'});
    }

    Student.findOne({ email })
    .then(student => {
        if(student) return res.status(400).json({msg: 'Student already exists'});

        const newStudent = new Student({
            firstName,
            lastName,
            email,
            password
        });
       
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newStudent.password, salt, (err,hash)=>{
                if(err) throw err;

                newStudent.password = hash;
                newStudent.save()
                .then(student => {

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
        })
    })
})
module.exports = router;