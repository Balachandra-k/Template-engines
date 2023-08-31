const mongoose =require('mongoose')

const connetDb =async ()=> {
    await mongoose.connect(process.env.MONGO_URL)
    .then(res =>{
        console.log(`mongobd connected succesfully`)
    }).catch(err => console.log(err))
}
module.exports =connetDb