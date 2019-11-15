 
const express = require("express");
const router = express.Router();
const items = require("../models/items");
const User = require("../models/model");
const jwt = require("jwt-simple");

router.get("/itemlist", async (req, res) => {
    await items
      .find({})
      .then(val => {
        res.send(val);
      })
      .catch(err => {
        res.send("error " + err);
      });
  });

  router.get('/useritems/:token', async(req, res)=>{
    const {token}=req.params;
    try{
      if(token!="null"){
        const userdata=await User.findOne({token});
        const userproducts=userdata.items;
        res.send(userproducts);
      }else{
        res.send('unvalid token');
      }
    }catch(err){
      res.send(err)
    }
  })

  router.post("/save", async (req, res) => {
    const { product_id, Itemlist, token } = JSON.parse(req.body.params.body);
    const userdata = await User.findOne({ token });
    const userproducts = userdata.items;
    await User.findOneAndUpdate(
      { token },
      { items: [{ [product_id]: Itemlist }, ...userproducts] }
    );
    res.send("SAVE");
  });
  
  module.exports = router;