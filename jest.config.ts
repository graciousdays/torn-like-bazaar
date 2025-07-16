import type { Config } from 'jest'

const config: Config = {
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

export default config
