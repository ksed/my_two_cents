var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String, // This type will change to user object
    required: true
  },
  postDate: {
    type: Date,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
});

postSchema.pre('findOneAndUpdate', function(){
  this.update({},{ $set: { postDate: new Date() } });
});
postSchema.post('findOneAndUpdate', function(post){
  post.summary = post.body.slice(0, 100) + "...";
  post.save();
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
