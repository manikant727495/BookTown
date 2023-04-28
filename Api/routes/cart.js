const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Book = require('../models/Books')
const fetchuser = require('../middleware/fetchuser');

router.post('/addtocart',fetchuser,async (req,res,next) =>{
    try{
        const userId = req.user.id;
        const cart = await Cart.findOne ({userId:userId});
        let result;
        if(!cart){
            result = await Cart.create({
                userId : userId,
                bookId: [req.body.bookId]
            });
            return res.status(200).json({success:"Added to cart scuccessfully"})
        } else {
            const newBookIdList = cart.bookId;
            newBookIdList.push(req.body.bookId);
            result = await Cart.updateOne(
                {userId:userId},
                {$set:{
                    bookId: newBookIdList
                }},
                {new:true}
            );
            return res.status(200).json({success:"Added to cart successfully"});
        }
    } catch(error){
        console.log(error.message);
        res.status(500).send('some error occured');  
    }
})

router.post('/getcartitem',fetchuser, async (req,res,next) =>{
    try{
        const userId = req.user.id;
        const cartItems = await Cart.findOne ({userId:userId});
        let result;
        const cartDetails = [];
        if(cartItems){
            const newBookIdList = cartItems.bookId;
            for(let bookId of newBookIdList){
                const bookDetails = await Book.findOne({_id:bookId});
                console.log(bookDetails);
                cartDetails.push(bookDetails);
            }
        }
        return res.status(200).json(cartDetails);
    } catch(error){
        console.log(error.message);
        res.status(500).send('some error occured');  
    }
})


module.exports = router;