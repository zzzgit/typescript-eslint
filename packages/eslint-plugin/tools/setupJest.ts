import * as path from 'node:path';

import { RuleTester } from '@typescript-eslint/rule-tester';

const baseDefault = RuleTester.getDefaultConfig();
RuleTester.setDefaultConfig({
  ...baseDefault,
  snapshots: {
    snapshotBasePath: path.resolve(__dirname, '..', 'tests', 'rule-snapshots'),
  },
});
