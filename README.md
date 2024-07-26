# Assignment
This project is designed to run end-to-end tests using Playwright. The setup includes TypeScript for type safety and `ts-node` for running TypeScript directly.

## Project Structure

- **package.json**: Contains the dependencies and scripts for the project.
- **tests**: Directory where your Playwright test files should be located.

## Prerequisites 
Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Cynthia-Amanat/Assignment

2. Navigate to the project directory:

   ```bash
   cd Assignment
    ```
3. Install the dependencies:
   
   ```bash
   npm install
    ```

## Running Test
 You can run the Playwright tests using the following npm scripts:

  Run all tests:
  ```bash
  npm run test
  ```
### Run the Tests on Different Browsers
  Run tests on Chromium:
   ```bash
    npm run test:chromium
   ```
Run tests on Firefox:
 ```bash
npm run test:firefox
  ```
Run tests on WebKit:
```bash
npm run test:webkit
 ```
### Dependencies
1. playwright: A framework for Web Testing and Automation.
2. ts-node: TypeScript execution environment for Node.js.
3. typescript: TypeScript language support.  

