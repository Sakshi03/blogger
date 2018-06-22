var mongoose = require('mongoose');

const blogPostModel = mongoose.model('posts', {
    id: Number,
    title: String,
    image: String,
    body: String
});
const userLogin= mongoose.model('userdetails',{
    email: String,
    password : String

});

module.exports = {
    blogPostModel: blogPostModel,
    userLogin: userLogin
}