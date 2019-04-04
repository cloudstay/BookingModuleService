module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['./client/setup-enzyme-adapter.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    }
}