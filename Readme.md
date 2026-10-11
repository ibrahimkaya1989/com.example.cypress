# Cypress Test Suite

Cypress-based end-to-end and API test project. The suite contains Cypress example tests, JSONPlaceholder API tests, Google search tests, and Softpos portal/API tests.

## Requirements

- Node.js `>=22`
- npm `>=11`
- Network access for tests that use external services
- Valid test environment credentials for Softpos tests

## Install

```bash
npm install
npm install cypress --save-dev
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```

## Run

The following commands are kept as the standard project run commands:

```bash
npx cypress run
npx cypress open
npx cypress open --browser electron
```

Equivalent npm scripts are also available:

```bash
npm test
npm run test:open
npm run test:headed
npm run test:api
npm run test:google
npm run test:softpos
```

## Project Structure

```text
.
├── cypress.config.js              # Cypress and Mochawesome configuration
├── cypress.env.example.json       # Safe environment template
├── cypress.env.json               # Local-only environment values (ignored)
├── cypress/
│   ├── e2e/                        # Cypress example and e2e specs
│   ├── integration/               # API, Google, and Softpos specs
│   ├── fixtures/                   # Test data files
│   ├── support/
│   │   ├── api_services/           # Reusable API service objects
│   │   ├── softpos/                # Softpos API helpers
│   │   ├── commands.js             # Custom Cypress commands
│   │   └── e2e.js                  # Global support setup
│   ├── reports/                    # Mochawesome JSON and HTML reports
│   ├── screenshots/                # Screenshots from failed tests
│   └── downloads/                 # Files downloaded during tests
├── package.json
├── package-lock.json
└── Readme.md
```

## Test Groups

- **API tests:** CRUD scenarios for JSONPlaceholder resources.
- **E2E examples:** Cypress command and browser interaction examples under `cypress/e2e`.
- **Google tests:** Search workflow tests against Google.
- **Softpos tests:** Portal login and OAuth token tests against the Softpos test environment.

The default run includes API tests and Cypress examples under `cypress/e2e`. Google and Softpos tests depend on external environments and should be run explicitly with their dedicated npm scripts.

## Reports

Test runs generate Mochawesome JSON files in `cypress/reports`. Generate the consolidated HTML report with:

```bash
npm run report
```

Failed browser tests may create screenshots in `cypress/screenshots`.

## Environment Variables

Copy `cypress.env.example.json` to `cypress.env.json` and replace its placeholders with test-only values. Keep credentials and environment-specific values outside source control, and never commit real passwords, tokens, or authorization headers.

The default CI workflow runs API and Cypress example tests. Google and Softpos tests require external access and credentials, so they remain explicit local commands unless a protected CI environment is configured.

## Continuous Integration

GitHub Actions runs `npm ci` and `npm test` on pushes and pull requests targeting `main`. Reports and failure screenshots are uploaded as workflow artifacts when they are generated.

## Versioning

Project versions use the `YYYY.MM.COUNT` format, for example `2026.10.1`.