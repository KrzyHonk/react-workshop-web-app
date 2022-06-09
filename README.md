# React.js workshop - a basic React application

This project was created as a set of examples for use during workshop about React.js basics.

## Running App

In the project directory, install required dependencies by running this command:

### `npm install`

After successful installation, you should be able to run the app using command:

### `npm this`

This will run the app in the development mode on port 3000.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## REST API mock

This project comes with basic REST API mock build using [json-server](https://github.com/typicode/json-server).
Script which sets basic REST endpoints for CRUD operations is in file `${projectRoot/test-utils/json-server/restApiMock.js}`.
You can run the backend mock by running given command from `json-server` directory:

### `node restApiMock.js`

The JSON server runs by default on port 3001, but you can change it in script file:

```javascript
server.listen(3001, () => {
    console.log('JSON Server is running');
});
```
