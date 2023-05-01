
const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const http = require('http')
const path = require('path')
require('dotenv').config();
const routes = require("./src/router");
const cookieParser = require("cookie-parser")

;(async () => {
    try {
       await mongoose.connect(process.env.DB_URL, {});
       console.log('Successfully connected database')
       const app = express();
       app.use(bodyParser.urlencoded({extended: false}));
       app.use(bodyParser.json());
       app.use(cookieParser());
       app.use('/api/v1', routes);
       const server = http.createServer(app);
       const port = process.env.PORT || 8000;
       server.listen(port).on('listening', () => console.log(`App is starting on port: ${port}`)).on('error', (err) => console.log(`An error occured while starting server`, err))
   } catch (error) {
       console.log(error)
       console.log(`An error is happening with DB URL connection string`)
   };
})();