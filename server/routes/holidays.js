const router = require('express').Router()
const {check, validationResult} = require('express-validator');

// guest model
const auth = require('../middleware/auth.js')

const Holiday = require('../models/Holiday');

router.get('/', auth, async (req, res) => {
    try {
        const holidays = await Holiday.find({user : req.user.id})
        res.json(holidays);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
})


router.post('/', auth, async (req,res) => {
    const {type, title, comment, date, status, status_code} = req.body
    try {
        let holiday = new Holiday ({
            user:req.user.id,
            type,
            title,
            comment,
            date,
            status,
            status_code
        })
        holiday = await holiday.save();
        res.json(holiday)

    } catch (err) {
        console.error(err.message)
    }
});


router.delete('/:id', auth, async (req,res) => {
    try {

        let holiday = await Holiday.findById(req.params.id);

        if (!holiday){
            return res.status(404).json({msg : 'guest not found'})
        } else {
            await Holiday.findByIdAndRemove(req.params.id);
            res.send('guest removed')
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }

})


/* this with a different middleware to change status from the admin side middleware that checks for usertype */
router.put('/:id', auth, async (req, res) => {

    const {type, title, comment, date, status, status_code} = req.body
    const updatedGuest = {type, title, comment, date, status, status_code}

   try {

       let holiday = await Holiday.findById(req.params.id);
       if(!holiday) {

           return res.status(400).json({msg: 'no holiday'});

       } else {
           holiday = await Holiday.findByIdAndUpdate(req.params.id, {$set: updatedGuest}, {new: true})
           res.send(holiday)
       }


   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error')

   }


})

module.exports = router