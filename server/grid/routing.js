'use strict';
const router=require('express').Router()
const mongoose=require('mongoose')
const fs=require('fs')

let Grid=require('gridfs-stream')
let conn=mongoose.connection
Grid.mongo=mongoose.mongo;
let gfs;
var crypto=require('crypto')
conn.once("open", ()=>{
gfs = Grid(conn.db);


router.get('/',function(req,res){
	console.log("mytouch=1")
res.send('Hello Erp_ _ _')
});

router.get('/:ID',function(req,res){
	console.log("mytouch=======2")

	gfs.findOne({ _id:req.params.ID },function(err,file){
		if(err) {
			return res.status(400).send(err);
		} else if (!file){
			return res.status(404).send('Error on the db looking for file...')
		}

		res.set('Content-Type', file.contentType);
		res.set('Content-Disposition', 'attachment; filename="' + file.filename +'"');
		let data=[];
		var readStream = gfs.createReadStream({ _id: req.params.ID});

		readStream.on('data', (chunk) => {
			data.push(chunk);
		})

		readStream.on('end', () => {
			data = Buffer.concat(data);
			console.log(data)
			console.log(file.contentType,"201=====");

			if( file.contentType.indexOf("application") > -1){
				//console.log(file.contentType.indexOf("application"))
				console.log(file.contentType,"202======")
                let one={}
                one.name=file.filename
				console.log(file.filename)
				one.data='data:application/pdf;base64,'+ Buffer(data).toString('base64');
                 
				res.send(one);
			} else {

				let one={}
				one.data= Buffer(data)
				one.name=file.filename
				console.log(file.filename)
				res.send(one)
			}

		});

		readStream.on('Error',(err) => {
			console.log(' An Error Occured--!',err)
			throw err;
		});
	})
})


router.delete('/:ID', function(req,res) {

	gfs.remove({_id:req.params.ID}, function(err){

		if(err){
			return handleError(err)
			console.log('Success')
		}
	});

	res.status(200).send({
		message: 'Success'
	});
})
router.post('/',function(req,res){
	//console.log(req.body,"101=========")
	console.log(req.file==null,"102=======")
	var part
	if(req.body.file)
	{
       console.log("103======= ")
	   part=req.body.file
	   console.log(part);

	}else{
		console.log("104====")
		part = req.files.file;
		console.log(part);
	}

	var md5_check = crypto.createHash('md5').update(part.data).digest("hex");
	console.log("105=======")
	console.log(md5_check,"106=======")
	gfs.findOne({
		md5: md5_check
	}, function(err, file){
		console.log(err,"107=====")
		//console.log(file,"108====")
		if(file==null)
		{
			console.log("new========")
			let writeStream= gfs.createWriteStream({
				filename:'doc_' + part.name,
				metadata:{ 'user_id': 1 },
				mode: 'w',
				content_type: part.contentType
			});
            
			writeStream.on('close', (file) => {
				return res.status(200).send({
					message: 'Success',
					file: file
				})
			});

			writeStream.write(part.data);
			writeStream.end();
		} else{
			console.log("duplicate",'109=====')
			file.duplicate=true;

			return res.status(200).send({message: 'Success', file: file});
		}
	})

})

})

module.exports = router;