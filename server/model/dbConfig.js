const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abdullahmujahidali:testpass123@crewmatescluster.dsunzvq.mongodb.net/?retryWrites=true&w=majority').then(() => {console.log('Mongodb connected')}).catch(err => {console.log(err)});