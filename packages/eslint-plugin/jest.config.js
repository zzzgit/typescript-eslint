'use strict';

// @ts-check
const baseConfig = require('../../jest.config.base.js');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...baseConfig,
  coveragePathIgnorePatterns: ['src/index.ts$', 'src/configs/.*.ts$'],
  setupFilesAfterEnv: [
    ...baseConfig.setupFilesAfterEnv,
    './tools/setupJest.ts',
  ],
};
