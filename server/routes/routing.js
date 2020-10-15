'use strict'

const router=require('express').Router()
const mongoose=require('mongoose')
const fs=require('fs')

const router = require('express').Router();
const config = require('../config/config');
const mongoose = require("mongoose");
let Grid=require('gridfs-stream')
let conn=mongoose.connection
Grid.mongo=mongoose.mongo;
let gfs;
//let gfs;
//var crypto=require('crypto')

conn.once("open", ()=>{
gfs = Grid(conn.db);
router.post('/',function(req,res){
	console.log(req.body,"101=========")
	console.log(req.files==null,"102=======")
	var part
	if(req.body.file)
	{
       console.log(req.body.file,"103======= ")
	}else{
		console.log(req.files.file,"104====")
	}

})

})


module.exports = router;