const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const runCommand = (command, args) => new Promise((resolve, reject) => {
  execFile(command, args, { windowsHide: true }, (error, stdout, stderr) => {
    if (error) {
      reject(new Error(stderr || error.message));
      return;
    }

    resolve(stdout);
  });
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:run', async () => {
        const reportsDirectory = path.resolve('cypress/reports');
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
