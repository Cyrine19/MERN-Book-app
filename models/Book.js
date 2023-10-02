const mongoose = require ('mongoose');

const bookSchema = new mongoose.Schema({
    category:{
        type: String,
        required: [true, 'Book category is reguired ']
    },
     author: {
        type :String ,
        required:[ true,'Author name is required']

    },
    title:{
        type: String,
        required:  [true ,'Title of the Book is Required'],
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
},{
    timestamps:true //created at and updated at will be added to each document automatically
     
});
const Book = mongoose.model('Book', bookSchema);
module.exports=Book;