import express from 'express'
import 'dotenv/config'
import db from "./db/index.js"
import { School } from './db/schema.js'
import {LatitudeSchema, SchoolSchema, LongitudeSchema} from "./validation/index.js"
const app = express()

const PORT = process.env.PORT||3500

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/addSchool',async (req,res)=>{

	try{
		const data = await SchoolSchema.validate(req.body)
		const school = await db.insert(School).values(data).$returningId() //Returns school ID
		return res.status(201).json({success:true,...school[0]})
	}
	catch(err){
		console.log(err)
		if("ValidationError") return res.status(422).json({success:false,error:`Validation Error : ${err.message}`})
		return res.status(500).json({success : false, error : err.message})
	}

})

app.get('/listSchool',async (req,res)=>{

	try{
		//By default latitude and longitude is 0 unless valid one is passed for it
		
		const latitude =  await LatitudeSchema.isValid({latitude : Number(req.query.latitude)}) ? Number(req.query.latitude) : 0
		const longitude =  await LongitudeSchema.isValid({longitude : Number(req.query.longitude)}) ? Number(req.query.longitude) : 0 

		const schools = await db.select().from(School) 
		const sortedSchools = schools.sort( (school1,school2) => {
			const dist1 = 3963.0 * Math.acos( (Math.sin(latitude)*Math.sin(school1.latitude)) + Math.cos(latitude)*Math.cos(school1.latitude)*Math.cos(school1.longitude-longitude) )
			const dist2 = 3963.0 * Math.acos( (Math.sin(latitude)*Math.sin(school2.latitude)) + Math.cos(latitude)*Math.cos(school2.latitude)*Math.cos(school2.longitude-longitude) )
			if(dist1==dist2)return 0
			if(dist1<dist2)return -1
			return 1
		})

		return res.status(200).json({success : true, latitudeUsed : latitude, longitudeUsed : longitude, schools : sortedSchools})
	}
	catch(err){
		console.log(err)
		return res.status(500).json({success:false,error:err.message})
	}


})
app.listen(PORT,()=>console.log(`Running on Port : ${PORT}`))