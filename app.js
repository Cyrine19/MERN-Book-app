const express = require ('express') ;
const dotenv = require ('dotenv');
const error = require ('./middlewares/errorMiddlewareHandler.js');
const userRoute = require ('./routes/usersRoutes.js');
const dbConnect =require ('./Config/dbConnect.js');
const usersRoute = require('./routes/usersRoutes.js');
const bookRouter = require('./routes/booksRoute.js');
const cors = require('cors');
dotenv.config();


const app = express();

//Db connect 

//Passing body data
app.use(express.json ());

//Routes
//Users
app.use('/api/users', usersRoute);
//Books 
app.use('/api/books', bookRouter);

//Error middleware
app.use (error.errorMiddlewareHandler);

//enable CORS
app.use(cors());

//Server
const PORT = process.env.PORT || 5001;
 
app.listen(5001, () => {
    console.log('Server is running on port:' , 5001)
});
//mongodb+srv://syrineba9:<password>@cluster0.kkssldn.mongodb.net/
