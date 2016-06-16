var express=require('express');

var signInRouter=express.Router();

signInRouter.route('/')
	.get(function(req, res){
		res.render('signIn');
	});


module.exports=signInRouter;