import { assert, describe, it } from 'vitest';
import { b } from './index';

describe('b', () => {
  it('b', () => {
    assert.strictEqual(b(), 'b');
  });
});
