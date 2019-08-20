module.exports = {
    port: process.env.PORT || 3000,  //set a environment variable or Change the port value for the port you gonna use.
    db: process.env.MONGDB || 'mongodb://localhost:27017/shop'
}