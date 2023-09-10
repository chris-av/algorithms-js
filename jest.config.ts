import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest';


const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testPathIgnorePatterns: ["<rootDir>/dist/"]
}

export default config;

