# es7-express
This repository contains the set up code needed to run Express.js with ES7 features. It presumes that you'll be using MongoDB.

# Getting started
- Run `$ npm install` to install all dependences.
- Ensure that you're running MongoDB
- Run `$ mongo < db-scripts/bootstrap.js` to insert the necessary records into the MongoDB database (Still TODO)
- Run `$ npm run develop` to start the development server

# Running Tests
- Run `$ npm run test` to run the full test suite

# Using Docker
While developing, we develop and run tests directly on the host to iterate quickly. Once we've reached a stopping point, we package up our code into an image and run the tests in that image.

- Run `$ docker-compose build` to create the Docker image
- Run `$ docker-compose up` to run the container at http://0.0.0.0:8080, this should also run the unit tests included in the project
