# INTROCEPT_TASK

# This is an simple application that allows to store user information in csv file and viewing list of all information and deatils as well.

# To run this project in your local machine first clone the repo from git hub with the command below

# STEP 1.

# git clone "REPO_URL"

# STEP 2.

After cloning the repo get inside that folder with command

# cd FOLDER_NAME

After the inter the following command

# npm install

/\*\*\*...This will install the required npm packages for node app

To run the server node app you should type following command

# npm run server

Boom ! ,now server is running on port 4000

---

Next you should get into client folder.Type the following command ensuring youu are in root of project folder

# cd client

# npm install

This will install all the packages required for react app.Next you should type following command to start react app

# npm start

Boom ! ,now client react app is running on port 3000

.............Package used in react app....................................................................

npm install axios

# react-axios packcage is used to make http request

npm install react-bootstrap@next bootstrap@5.0.2

# React-Bootstrap is a complete re-implementation of the Bootstrap components using React which provide a easier way to create UI.

npm install react-paginate --save

# react paginate is used to create pagination for data in react app

npm install react-hook-form

# React Hook form package is used for validating form input and submitting form data to backend node api.

npm install react-router-dom

# React-router-dom is used for creating multiple pages apps in react through routing.It provide convient way for handling routes in react application

npm install date-picker

# This is used for creating date picker component in react,form input field .

npm install redux

# Redux is a predictable state container for JavaScript apps.

# It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

# You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available

npm install react-redux

# Redux itself is a standalone library that can be used with any UI layer or framework, including React. Although Redux and React are commonly used together, they are independent of each other.React Redux is the official Redux UI binding library for React.

# If you are using Redux and React together, you should also use React Redux to bind these two libraries.

npm install redux-thunk

# Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.

# One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request. Redux Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned.

npm install redux-devtools-extension

# Working with redux may be quite intimidating with fancy terminologies like actions, reducers, middleware, store, etc. But Redux DevTools extension can help you a lot in visualizing all the complex events that are happening in a redux application under the hood

\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***Packages used in node app**\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\*\*\***\*\*\*\***\*\***\*\***\*\***\*\*\*\***\*\***\*\*\***\*\***\*\*\*\***\*\***\*\***\*\***\*\*\*\***\*\***

npm install body-parser

# Body-parser is the Node.js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.

npm install cors

# CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

# In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.

npm install express-validators

# express-validator is a set of express.js middlewares that wraps validator.js validator and sanitizer functions.

npm install express

# Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −

# Allows to set up middlewares to respond to HTTP Requests.

# Defines a routing table which is used to perform different actions based on HTTP Method and URL.

# Allows to dynamically render HTML Pages based on passing arguments to templates.

npm install dotenv

# Environment variables are variables that are set outside of a program, often through a cloud provider or operating system.

# In Node, environment variables are a great way to securely and conveniently configure things that don't change often, like URLs, authentication keys, and passwords.

npm install winston

# winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each winston logger can have multiple transports (see: Transports) configured at different levels (see: Logging levels). For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.

For more info visit

# https://github.com/winstonjs/winston

npm install csv-parser

# This package is a parser converting CSV text input into arrays or objects. It implements the Node.js stream API. It also provides alternative APIs for convenience such as the callback API and sync API. It is both extremely easy to use and powerful.

npm install csv-writer

# Convert objects/arrays into a CSV string or write them into a file. It respects RFC 4180 for the output CSV format.

npm install path

# Node.js path module is used for handling and transforming file paths. This module can be imported using the following syntax

**\*\***\*\***\*\***STEPS INVOLVED IN DEPLOYING APPLICATION \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***

# STEP 1:

# 1: Keep client folder inside the same folder where server.js file resides .

# 2: We need to change the PORT number from Static to Dynamic for Heroku

Now, first delete the PORT from the .env file and simply write

const PORT = process.env.PORT || 5000;

on the server app.js file.

# 3: We need to tell the Heroku to serve the statics files of the client.

# We need to go to client folder and then run npm build. It will create a build folder and that is the folder which we want to serve on Heroku as a frontend.

First go resides into following path and type the command below
/home/sushil/2020/TASK/client

# npm run build

THen keep keep the following code into server.js file beforing running the application on port

if (process.env.NODE_ENV=="production"){
app.use(express.static("client/build"))
}

# 4.Remove the proxy from the package.json file, if you have any

    "proxy": "http://localhost:4000/",

# 5: We need to add few scripts on the Server package.json files in order to tell Heroku, what to do and what not to.

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node server.js",
"server": "nodemon ./server.js",
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
},

# 6 :6: Remove the git file from the Client side, if there is any

Code = rm -rf .git

# 7: Once all above steps completed, then we will create an application on Heroku

So we need to write

Heroku login

Then simply login on it.

This is how we do..

First go resides into following path and type the command below

/home/sushil/2020/TASK/client

# heroku login

# 8. Once login then go to Heroku website to create an Heroku app to host our project

Click on New button on the top right corner. Then give the name of the project, make sure the name of the project must be unique. Then click on create app button to complete the process.

# 9: Once you create simply open the Heroku app and that’s it everything was already written there just follow the steps.

=> We need to initialize git to the main project folder not individually on each client or server. Before initialize git make sure if there are any git repo already present delete it

# 10: At bottom we have our Website APP link and it’s done.
