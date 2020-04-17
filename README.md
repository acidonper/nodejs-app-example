# NodeJS App Example

This NodeJS app is a simple application example based on the following technologies:

-   NodeJS
-   Express
-   Javascript
-   Handlebars

## Init Project

In order to start to work with this application, it is required to create the previous environment file and execute the following command:

```
$ npm install
$ npm start
```

## Available Scripts

In project root directory, it is possible to execute the following scripts:

### `npm start`

Runs the src/app.js file in order to run the application in both development adn production mode. It is important to bear in mind that nodeJS is execution engine:

```
"start": "node src/app.js"
```

### `npm test`

Runs the test files, included below, in order to run the application test.

-   `*`.spec.js -> Unity Test
-   `*`.test.js -> Integration Test

It is important to bear in mind that testing in this repository is implemented by Mocha and Chai-http.

```
"test": "mocha --timeout 10000 --recursive --exit"
```

# Deployment in OpenShift

Please, visit [Deploy NodeJS App Example in Openshift ](./.openshift/README.md) for more information about App deployment in Openshift.

# License

BSD

# Author

Asier Cidon
