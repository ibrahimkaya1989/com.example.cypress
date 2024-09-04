const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Mochawesome raporlarının oluşturulması için event listener ekleyin
      on('after:run', (results) => {
        const { exec } = require('child_process');
        exec('npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json && npx marge cypress/reports/report.json -o cypress/reports');
      });
    },
    // Raporları kaydetmek için reporter ayarı
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    specPattern: 'cypress/integration/**/*.spec.js', // Test dosyalarının konumu
  },
});
