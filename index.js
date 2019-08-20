const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true}, (err, res) => { //port 27017 is the default mongodb port
    if (err) {
        console.log(`Data base connection failed: ${err}`)
    }
    console.log('Data base connection enable')

    app.listen(config.port, ()=> {
        console.log(`API REST running on http://localhost:${config.port}`)
    })
})