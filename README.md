# TO-DO App (ChadMonkey)

## Description
This is a simple Todo app built using React.js and Redux for state management, with Node.js, Express.js and MongoDB for backend. It allows user to note down ten most important tasks of the day and user can mark them done or not done as he proceeds. (Still being worked on).
<div style="display: flex; justify-content: space-between;">
<img src="https://github.com/Arwolfe07/ToDo/blob/master/screenshots/1.1_Chad.png" alt="Img" width="45%"></img>
<img src="https://github.com/Arwolfe07/ToDo/blob/master/screenshots/1_Chad.png" alt="Img" width="45%"></img>
</div>
<div style="display: flex; justify-content: space-between;">
<img src="https://github.com/Arwolfe07/ToDo/blob/master/screenshots/2_Chad.png" alt="Img" width="45%"></img>
<img src="https://github.com/Arwolfe07/ToDo/blob/master/screenshots/3_Chad.png" alt="Img" width="45%"></img>
</div>

## Features
* Authentication:
    * Using JWT token authentication, the user will create a new account using email and password to get access to protected routes. 
    * The token will be checked before the user can add, edit or delete tasks.
    * If a request is made without an authorization header, the server responds with a 401 status code and "Not authorized, token not present".
    * Can check the `middlewares/authMiddleware.js`.

* Tasks:
    * Tasks CRUD operations are implemented using RESTful API approach.
    * Each task has a unique ID and belongs to one of the users in the database.
    * When adding new tasks, if no owner is provided - it'll default to the log in page.
    * User first need to be authenticated before doing any if above operations.

* Error Handling:
    * If there is an error while creating, updating or deleting a note, a valid error will be thrown.
    * This can be seen at `/controllers/taskController.js` file.
    * If any error is thrown in the server like wrong endpoint in api, it will be caught and will be caught by custom error middleware at `/middlewares/errorMiddleware.js`.

 * Responsive UI for different screen sizes.



## Note 
* This project contains some info (.env file) that has been hidden for security purposes so please enter your credentials on cloning the repo.
* This project has been hosted at - [Here](https://chadmonkey.netlify.app/)

## Installation & Usage Instructions
Run the following command on your terminal
```sh
git clone https://github.com/Arwolfe07/notes_backend.git
```
After that go to backend folder and create a .env file and add DB_URL (Your DB) and JWT_SECRET variables.

Now in the backend folder and run 
```sh
npm install
npm start
```
After that open a new terminal and go to the frontend folder. Run
 
```sh 
npm install
npm run dev
``` 
There commands will install all the required dependencies and start running your code on local environment.

## Technologies Used
### Backend
1. [NodeJs](https://nodejs.org/en/) - Node is an open source, cross-platform JavaScript run-time environment
2. [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
3. [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for nodejs
4. [MongoDB](https://www.mongodb.com/) - Cloud database
5. [dotenv package](https://www.npmjs.com/package/dotenv) - Dotenv loads variables from a .env file
6. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens for authentication and authorization.
7. [BcryptJs](https://www.npmjs.com/package/bcryptjs) - A package used for hashing passwords.

### Frontend
1. [ReactJS](https://react.dev/) - A JavaScript library for building user interfaces
2. [Redux](https://redux.js.org/) - Predictable state container for JS apps
3. [tailwindcss](https://tailwindcss.com/) - Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.
4. [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js
5. [react-toast-notifcations](https://www.npmjs.com/package/react-toast-notifications) - A configurable, composable, toast notification system for react.
