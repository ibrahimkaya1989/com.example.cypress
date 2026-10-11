const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const runCommand = (command, args) => new Promise((resolve, reject) => {
  execFile(command, args, { windowsHide: true, shell: true }, (error, stdout, stderr) => {
    if (error) {
      reject(new Error(stderr || error.message));
      return;
    }

    resolve(stdout);
  });
});

const reportsDirectory = path.resolve('cypress/reports');

const cleanReports = () => {
  fs.mkdirSync(reportsDirectory, { recursive: true });

  fs.readdirSync(reportsDirectory)
    .filter((file) => /^mochawesome_.*\.json$/.test(file) || /^report(?:\.html|\.json)$/.test(file))
    .forEach((file) => fs.rmSync(path.join(reportsDirectory, file), { force: true }));
};

module.exports = defineConfig({
  e2e: {
    expose: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
      googleUrl: process.env.GOOGLE_URL || 'https://www.google.com',
      softposLoginUrl: process.env.SOFTPOS_LOGIN_URL || 'https://softpostest.paycore.com/uaa/login',
      softposTokenUrl: process.env.SOFTPOS_TOKEN_URL || 'https://softpostest.paycore.com/uaa/oauth/token'
    },
    setupNodeEvents(on, config) {
      on('task', {
        executeCommand(command) {
          return new Promise((resolve, reject) => {
            require('child_process').exec(command, (error, stdout, stderr) => {
              if (error) {
                reject(new Error(stderr || error.message));
                return;
              }

              resolve({ code: 0, stdout, stderr });
            });
          });
        },
        readFile(filePath) {
          return fs.readFileSync(filePath, 'utf8');
        },
        workingDirectory() {
          return process.cwd();
        }
      });

      on('before:run', cleanReports);

      on('after:run', async () => {
        const reportFiles = fs.readdirSync(reportsDirectory)
          .filter((file) => /^mochawesome_.*\.json$/.test(file))
          .map((file) => path.join(reportsDirectory, file));

        if (!reportFiles.length) {
          return;
        }

        const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';
        const mergedReport = await runCommand(npxCommand, ['mochawesome-merge', ...reportFiles]);
        const reportPath = path.join(reportsDirectory, 'report.json');

        fs.writeFileSync(reportPath, mergedReport);
        await runCommand(npxCommand, ['marge', reportPath, '-o', reportsDirectory]);
      });
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    specPattern: [
      'cypress/integration/api_tests/**/*.spec.js',
      'cypress/e2e/**/*.cy.js'
    ],
  },
});
