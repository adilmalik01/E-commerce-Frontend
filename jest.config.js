module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios|react-query|sweetalert2)/"],
  maxWorkers: 2, // Reduce the number of workers to 2
};
