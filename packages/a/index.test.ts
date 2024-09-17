import { assert, describe, it } from 'vitest';
import { a } from './index';

describe('a', () => {
  it('a', () => {
    assert.strictEqual(a(), 'a');
  });
});
