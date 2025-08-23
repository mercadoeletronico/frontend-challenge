export default {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:5173',

  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
};


