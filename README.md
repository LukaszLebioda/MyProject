# MyTopBooks App (Monorepo)

- app to store information about my personal top novels (displayed as a table),
- created with MERN stack (mongo db, express, react.js, node.js),
- covered with tests: e2e, API, load, visual,

# Prerequisites

## Backend

node.js (with express, dotenv),
`npm install express` -> to install express.js for building API,
`npm install -g nodemon` -> to watch changes in server.js file,
`npm install dotenv` -> to load from .env file into process.env,

## Database (MongoDB)

- install mongodb locally: `npm install mongoose`, OR:
- create account: https://www.mongodb.com/products/platform/atlas-database,
- create free database cluster (name it)`
- add username & password (security / quickstart)`
- allow access from anywhere or from particular IP address (security / network access)`
- connect cluster to the application:
  - get connection string and store it in .env (insert password into string),
  - `npm install mongoose` (to connect to db, interact with collections, use schemas etc.),

## Frontend

<!-- node.js (with react.js), -->
<!-- `npm init -y` -> to initiate project with package.json, -->

## Testing

### API

- `npm install supertest --save-dev` -> to install supertest for testing API,
- `npm install --save-dev jest` -> to use jest testing library (describe, it, expect) with supertest,

<!-- ## Acceptance Criteria

- JavaScript & TypeScript,
- ESLint + Prettier (prettier on pre-commit?) + eslint-config-prettier -> code linter & formatter configuration,
- React.js -> form (title, author, date of publishing, genre, description), possibility to update or delete data, searchbox, pagination,
- Node.js (express, pg, cors) -> API to create, read, update or delete books related entries,
- postgreSQL -> database to store books related entries,
- Playwright -> e2e tests, Postman & Newman -> API tests, k6 -> load tests, Percy -> visual tests,
- Git & GitHub -> version control system, external code repository,
- Jenkins -> ci/cd pipeline triggered after every push to external repository (alternative -> GitHub Actions),

- nice to have: Supertest, JSON SCHEMA, Docker, Kubernetes, husky, Cucumber, test documentation (user stories, test scenarios & test cases), API documentation (Swagger), test reporter & test results notification,

## (Example) Project Structure

```
/
├── public/               # Static files
│   └── index.html        # Frontend UI
├── tests/                # Test files
│   ├── e2e/              # Playwright E2E tests
│   └── unit/             # Jest unit tests
├── k6/                   # k6 load tests
├── postman/              # Postman API tests
├── .env                  # Environment variables
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .gitignore            # Git ignore file
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile            # Docker configuration
├── Jenkinsfile           # Jenkins pipeline
├── package.json          # Node.js dependencies
├── server.js             # Express server
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Prerequisites

- IDE: Visual Studio Code,
- VS Code extensions: Prettier, ESLint,

- JS/TS runtime: node.js,
- code formatter: Prettier,
- code linter: ESLint,

-->
