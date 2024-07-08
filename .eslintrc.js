module.exports = {
  // Your existing configuration
  overrides: [
    {
      files: ["src/service-worker.js"],
      extends: [".eslintrc.serviceworker.js"],
    },
  ],
};
