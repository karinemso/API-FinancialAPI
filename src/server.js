
const app = require('./app')
require('dotenv').config(); 


app.listen(3000, ()=> {
    console.log("Ouvindo a porta 3000")
})



const mongoose = require('mongoose')


mongoose.connect(process.env.DB_HOST)
.then(()=> {
    console.log('conectou')
})

// router.get('/tasks', (req,res)=> {
// res.send('com router')
// })

