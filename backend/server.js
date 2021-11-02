const express = require('express')
const cors = require('cors')

require('dotenv').config();//To have enviroment variables in the .env file

const app = express();//Creates the express server
const port = process.env.PORT || 5000;//The port the server will be on

//Middleware
app.use(cors());//Cors Middleware
app.use(express.json());//parses json. server will me sending and recieving json

//Starts the server. starts listening on a specific port.
app.listen(port, ()=>{
    console.log(`server is runnig on port: ${port}`)
});

