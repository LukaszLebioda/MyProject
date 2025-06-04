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

- use mongoDB cloud (optionally install mongoDB locally);
- create account: https://www.mongodb.com/products/platform/atlas-database,
- create free database cluster (give it a name)`
- add username & password (security / quickstart)`
- allow access from anywhere or from particular IP address (security / network access: '0.0.0.0/0')`
- connect cluster to the application:
  - get connection string and store it in .env (insert password into the connection string),
  - `npm install mongoose` (to connect to db, interact with collections, use schemas etc.),

## Frontend

- `npx create-react-app <project-directory>` (to create React app),
- `npm install- eact-router-dom` (allows to add pages to React app),

## Testing

### Code standards

#### Prettier

- `npm i --save-dev --save-exact prettier` -> to install Prettier (and hardcode its version),

### API

#### Supertest + Jest

- `npm install supertest --save-dev` -> to install supertest for testing API,
- `npm install --save-dev jest` -> to use jest testing library (describe, it, expect) with supertest,
- `npm install --save-dev jest-json-schema` -> to use json schema matcher for jest,

### E2E

#### Playwright

docs: https://playwright.dev/docs/api/class-page,

- `npm init playwright` (or @latest / or e.g. @1.17.123) -> installs,
- `npx @playwright/test --version` -> checks installed version,
- `npm i @playwright/test` -> installs new version,

- `npx playwright test` -> runs tests (headless by default),
- `npx playwright show-report` -> displays report in html,
  `npx playwright test --trace on` -> includes test tracer,
- `npx playwright test --project=webkit` -> runs only one project,
- `npx playwright test --headed` -> runs tests in headed mode,
- `npx playwright test --ui` -> runs tests in UI mode,
- `npx playwright test filename.spec.js` -> runs one test only,
- `npx playwright test -g "name of the test"` -> runs one desc only,
- `npx playwright codegen https://website.com/` -> record the test,
- `npx playwright test --debug` -> runs tests in debug mode,

<!-- ## Acceptance Criteria

- JavaScript & TypeScript,
- ESLint + Prettier (prettier on pre-commit?) + eslint-config-prettier -> code linter & formatter configuration,
- React.js -> form (title, author, date of publishing, genre, description), possibility to update or delete data, searchbox, pagination,
- Node.js (express, pg, cors) -> API to create, read, update or delete books related entries,
- postgreSQL -> database to store books related entries,
- Playwright -> e2e tests, Postman & Newman -> API tests, k6 -> load tests, Percy -> visual tests,
- Git & GitHub -> version control system, external code repository,
- Jenkins -> ci/cd pipeline triggered after every push to external repository (alternative -> GitHub Actions),

- nice to have: Supertest, JSON SCHEMA, Docker, git tag version, Kubernetes, husky, Cucumber, test documentation (user stories, test scenarios & test cases), API documentation (Swagger), test reporter & test results notification,

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
