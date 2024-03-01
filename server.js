const express = require('express');
const { router } = require('./routes/api');
const { router : routerPages } = require('./routes/pages');
const mongoose = require('mongoose');   

mongoose.connect('mongodb://localhost:27017/MernLogin', {useNewUrlParser: true,useUnifiedTopology: true})

const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})

db.once('open', () => {
    console.log('Database Connection Established');
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use("/api", router)
app.use("/", routerPages)