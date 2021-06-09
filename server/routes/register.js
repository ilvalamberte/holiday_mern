require('dotenv').config()
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//user Model 
const User = require('../models/User.js')


router.post('/',

  async (req, res) => {
  

    const { name, email, password, mobile, country, occupation } = req.body

    try {
      // user already exits ?
      let user = await User.findOne({ email })
    
      user = new User({
        name,
        email,
        password,
        mobile,
        country, 
        occupation
      })

      // password encryption
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      // sign a jsonwebtoken

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, "secret", {
        expiresIn: 36000
      },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
    }
  })

module.exports = router