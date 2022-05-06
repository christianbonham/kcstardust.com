const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  compilerOptions: {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "react",
    "sourceMap": false,
    "experimentalDecorators": true,
    "noImplicitUseStrict": true,
    "removeComments": true,
    "moduleResolution": "node",
    "lib": ["es2017", "dom"],
    "typeRoots": ["node_modules/@types", "src/@types"]
  },
  exclude: ["node_modules", "out", ".next"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
