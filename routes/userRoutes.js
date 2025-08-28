const express=require('express');

const User=require('../models/user');
const router=express.Router();

router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
      }
    });
    const result = await newUser.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports=router;