# Node Review Project

This is a Node.js project that utilizes various popular libraries for web application development. The project includes a docker-compose.yml file to facilitate setting up the development environment with MongoDB and Redis.

## Technologies Used

The project utilizes the following technologies and libraries:

* Node.js: a JavaScript runtime for server-side development.
* TypeScript: a typed superset of JavaScript.
* Express: a fast and minimalist web framework for Node.js.
* Jest: a JavaScript testing framework.
* JSON Web Token (JWT): a token-based authentication method.
* ESLint: a linting tool to maintain code consistency and identify issues.
* BullMQ: a library for managing asynchronous job queues.
* Mongoose: an object modeling library for MongoDB in Node.js.

## Prerequisites

Make sure you have the following dependencies installed on your system:

* Node.js (version 14 or higher)
* Docker (optional, only if you want to run MongoDB and Redis using Docker)

## Configuration

Follow the steps below to configure the project:

* Clone this repository to your local directory.
* Navigate to the project directory: `cd node-review`
* Copy the .env.example file to .env: `cp .env.example .env.`
* Edit the .env file and configure the environment variables as needed.

## Installation

To install the project dependencies, run the following command in the terminal:

```
npm install
```

## Startup

To start the project, run the following command in the terminal:

```
npm run start:dev
```

This command will start the Node.js server and it will be ready to receive requests.

## Testing

To run the project tests, use the following command in the terminal:

```
npm run test
```

This will execute the tests defined in the project using the Jest framework.

## Docker Usage (Optional)

If you prefer to use Docker to run MongoDB and Redis in containers, follow the steps below:

* Ensure you have Docker installed and running on your machine.
* In the project directory, run the following command to start the MongoDB and Redis containers:

    ```
    docker-compose up -d
    ```

This will start the containers in the background (detached mode).

With Docker running, MongoDB will be accessible at localhost:27017 and Redis at localhost:6379.
