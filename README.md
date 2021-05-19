# Simple ToDo App with PERN Stack
This simple ToDo app using the PERN (PostgreSQL, Express, React and Node) stack, using Typescript in the backend. The focus was mainly on the backend development, which also included integration and end-to-testing. Additionally, the goal was to create a complete CI/CD deployment pipeline which deploys the app on Heroku as final step after all lights have turned green so to say.

You can access the app on [https://frozen-tundra-02889.herokuapp.com/](https://frozen-tundra-02889.herokuapp.com/)

## Prerequisites 

```
git clone https://github.com/avocadohooman/pern_todo.git
cd pern_todo
npm install
```

## Development mode

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

Note: You won't be able to see any ToDo entries, or add any new ToDo as the server requires the process.env.DATABASE_URL.

## Build & Production mode

Run `npm run build-client` to build the client. The build artifacts will be stored in the `build/` root directory. 

Run `npm run start-prod` for a production server. Navigate to `http://localhost:3000/`. 

Note: You won't be able to see any ToDo entries, or add any new ToDo as the server requires the process.env.DATABASE_URL.

## Running integration test
Run `npm run test` to execute the integration tests via [Jest](https://github.com/facebook/jest).

## Running end-to-end tests

First run `npm run dev` to start the development server. 
Then run `npm run test:e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

# Learnings

This project served to implement my newly acquired knowledge on full-stack development, with the main focus on backend development and CI/CD integration.
The biggest pain points were configuring the CI/CD pipeline and getting the backend to work properly with Typescript sometimes.

The backend and the tests are nothing fancy, but were only implemented for the purpose of creating a solid CI/CD deployment pipeline.

It was the first time I worked with PostgresSQL and I really enjoyed it. A few months ago, I wasn't able to asnwer the question how to protect the backend from SQL injections, and with this project I have learnt to use parameterized queries to prevent SQL injections. Cool stuff!

# Improvements

More robust backend APIs, better test suits.

