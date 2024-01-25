const mongoose=require('mongoose')

const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log(`connnection succesfull`)
}).catch((e)=>console.log(`connection failed`))
