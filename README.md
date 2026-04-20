# TypeScript Playwright BDD Test Automation Framework

This is a complete test automation framework using TypeScript, Playwright, and Cucumber for BDD testing on the DemoQA website (https://demoqa.com).

## Features

- BDD with Cucumber
- Page Object Model
- Cross-browser testing (Chromium, Firefox, WebKit)
- Screenshots and videos on failure
- HTML reports
- CI/CD ready with GitHub Actions

## Project Structure

- `features/` - Cucumber feature files
- `src/pages/` - Page object classes
- `src/step-definitions/` - Step definition implementations
- `src/hooks/` - Cucumber hooks
- `src/support/` - Driver and configuration classes
- `config/` - Configuration files
- `utils/` - Utility scripts
- `tests/` - Additional test files
- `.github/workflows/` - CI/CD pipelines

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npm run install-browsers
   ```

## Running Tests

- Run all tests: `npm test`
- Run tests in headed mode: `npm run test:headed`
- Run tests for CI: `npm run test:ci`
- Generate reports: `npm run report`

## Configuration

Edit `config/settings.json` to change browser, timeouts, etc.

## CI/CD

Tests run automatically on push/PR to main/master branches via GitHub Actions.