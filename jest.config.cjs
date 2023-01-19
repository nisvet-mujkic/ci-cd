module.exports = {
  rootDir: process.cwd(),
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: { ".*\\.(tsx?)$": "@swc/jest" },
  testEnvironment: "jsdom",
};
