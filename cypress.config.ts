import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: ['src/**/*.cy.ts', 'cypress/e2e/**/*.cy.ts'],
    supportFile: 'cypress/support/e2e.ts',
  },
})
