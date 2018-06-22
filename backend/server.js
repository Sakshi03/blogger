const express = require('express');

const mongoose = require('./mongooseConfig');
const models = require('./models');

const cors = require('cors');

const expressApp = express();

expressApp.use(cors());

// var insertwalaobject = new models.blogPostModel({
//     id: 1,
//     title: "bc",
//     image: "image",
//     body: 'bodafdssay'
// });

// insertwalaobject.save(function(err, response){
//     if(err){
//         console.log("error aa gua 22");
//     } else {
//         console.log('balle 22 ');
//     }
// }) 

models.blogPostModel.find( {title: 'bc'} , function(err, response){
    if(err){
        console.log('sala koi post he nia haga');
    } else {
        console.log(JSON.stringify(response, undefined, 2));
    }
})

expressApp.get('/createPost', function(request, response){
    
    response.send({ success: true, message: 'bye'});
})


expressApp.get('/balle', function(request, response){
    response.send({ success: true, message: 'wah bha   i'});
})

expressApp.post('/home',function(request,response){
 var userkadetails=new models.userLogin({});
 userkadetails.save(function(err,response){
     if(err){
         console.log("data saved successfully to DB");
     }else{
         console.log("unable to save to database");
     }
 })
});



expressApp.listen(3000, function(){
    console.log('listening at 3000');
})