export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
      '^.+\\.js$': 'babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@babel).+\\.jsx?$',
      'node_modules/(?!(node-fetch)/)'
    ],
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node',
      'mjs'
    ]
  }
  