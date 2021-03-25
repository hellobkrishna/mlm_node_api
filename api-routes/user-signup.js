const express = require('express')
const User = require('../model/users')
const router = express()

router.post("/register", function(req, res) {
    var newUser = new User({ username: req.body.username, referral: req.body.referral });

    User.register(newUser, req.body.password, function(error, user) {
        if (error) {
            console.log(error)
            req.flash("signerror", error.message)
            return res.redirect("/register")
        }
        //Do the referral link creation stuff here, don't know for sure

    })
})