const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect('mongodb://rajesh:temp123@ds131942.mlab.com:31942/pusherpoll')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));