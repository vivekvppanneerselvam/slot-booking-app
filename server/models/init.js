const mongoose = require('mongoose')

mongoose.Promise = global.Promise

/*mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useCreateIndex: true, }).then(() => {
    console.log('Successfully connected to database')
  }).catch(error => {
    console.error('Error connecting to MongoDB database', error)
  })*/
  
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, },function(error){
  if(error)  console.error('Error connecting to MongoDB database', error)
    console.log(`connect mongodb success`);
});

module.exports = mongoose
