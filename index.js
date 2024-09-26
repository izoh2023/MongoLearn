const run = require('./dbConnection')
const express = require('express')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/getData', async (req,res)=>{
    try {
        const schoolDb = await run();
        const studentsDoc = schoolDb.collection('students')
        students = await studentsDoc.find().toArray()
        console.log(students)
        return res.status(200).json(students)

    } catch (error) {
        return res.status(500).json(
            'error connecting to the database'
        )
        
    }
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})