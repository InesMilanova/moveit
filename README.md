## NOTE

Some code is added only for demonstrating purposes, and might not be suitable for a real-world application.

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Instructions
**It is tested on MacOS using the NodeJS version mentioned below. There is no guarantee it will start/work as expected on other OS**
The development server can be ran locally using NPM. This allows testing of the application's code locally. 

Required dependencies on the host PC are: [NodeJS](https://nodejs.org/), [ReactJs](https://reactjs.org/), [npm](https://www.npmjs.com/).

## Building and Running the Local Development Servers
1. Ensure that Node.js is installed on the host PC - Supported version is 16.14.x but others might also work
2. Run the following command from the terminal in order to install the necessary dependencies:
```
npm install
```
3. Wait a few seconds
4. Create a .env file in the root of the project
5. Add the following environment variable in the .env file
```
REACT_APP_GOOGLE_API_KEY=AIzaSyDTv6qoyq8CL6ntb3RFQ0a_UBpCjeuv87E
```
6. To start the development server, run the following command:
```
npm start
```
7. Wait for the server to start
8. You should now be able to see the app running (at localhost:3000)

9. Congrats, You've made it! :)