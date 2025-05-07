# Simple Form App

A simple web application that allows users to submit data through a form which is then stored in a PostgreSQL database.

## Features

- Clean and responsive UI
- Node.js/Express backend
- PostgreSQL database for data storage
- Comprehensive testing suite (Jest, Playwright, Postman, and k6)
- Dockerized deployment
- CI/CD pipeline with Jenkins

## Project Structure

```
/
├── public/               # Static files
│   └── index.html        # Frontend UI
├── tests/                # Test files
│   ├── e2e/              # Playwright E2E tests (TypeScript)
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

- Node.js (v14+)
- Docker and Docker Compose
- PostgreSQL (if running locally without Docker)
- Jenkins (for CI/CD)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/simple-form-app.git
   cd simple-form-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running with Docker

The easiest way to get started is with Docker:

```bash
docker-compose up
```

This will start both the Node.js application and PostgreSQL database.

### Running Locally

1. Make sure PostgreSQL is installed and running locally
2. Update the `.env` file with your database credentials
3. Start the application:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

### Unit Tests

```bash
npm test
```

### E2E Tests (Playwright with TypeScript)

```bash
npm run test:e2e
```

### API Tests (Postman)

```bash
npm run test:api
```

### Load Tests (k6)

```bash
npm run test:load
```

## CI/CD with Jenkins

This project includes a Jenkinsfile that defines a CI/CD pipeline with the following stages:

1. Checkout
2. Setup
3. Lint
4. Build
5. Unit Tests
6. Start Services
7. API Tests
8. E2E Tests
9. Load Tests

The pipeline is triggered automatically on every Git commit.

## Development

To start the application in development mode with hot-reloading:

```bash
npm run dev
```

### Code Quality

This project uses ESLint and Prettier to ensure code quality and consistent formatting.

- Run linting:

  ```bash
  npm run lint
  ```

- Fix linting issues automatically:

  ```bash
  npm run lint:fix
  ```

- Format code with Prettier:
  ```bash
  npm run format
  ```

## API Endpoints

- `POST /api/data` - Save data to the database

  - Request body: `{ "data": "Your data here" }`
  - Response: `{ "message": "Data saved successfully", "data": { ... } }`

- `GET /api/data` - Retrieve all saved data
  - Response: Array of data objects

## License

MIT
