import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  rootDir: ".",
  roots: ["<rootDir>/__tests__/", "<rootDir>/src/"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  verbose: true,
};

export default config;
