const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
// const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000
// const MonGODB_URI = 'mongodb+srv://remon:admin@cluster0.l56kl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(process.env.MonGODB_URI || 'mongodb://localhost/mernDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');
})


// //saving data to mongo

// const data = {
//     title: "Hello I am Remon",
//     body: "I want to be a fullstack develper"
// }


// //.save()

// const newBlogPost = new BlogPost(data); //instance of the model

// // newBlogPost.save((error) => {
// //     if (error) {
// //         console.log("data save error");
// //     }
// //     else {
// //         console.log("Data saved successfully")
// //     }

// // })

const routes = require('./routes/api')
app.use("/", express.static(path.join(__dirname, "/dist/client")));
//will make json so can be accessed via server js req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// app.use(cors())
app.use(morgan('tiny'));
app.use('/api',routes);

//routes
// app.get('/api',(req,res)=>{
//     const data ={
//         username:'hi',
//         age:'23'
//     }
//     res.json(data)
// })
if(process.env.NODE_ENV !== 'production') {
    app.use(express.static('client/build'));
}



app.listen(PORT, console.log(`server is loading in ${PORT}`));