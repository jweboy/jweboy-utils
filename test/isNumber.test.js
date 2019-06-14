import assert from 'assert';
import isNumber from '../isNumber';

describe('isNumber', () => {
    it('should return `true` for numbers', function() {
        assert.strictEqual(isNumber(0), true);
        assert.strictEqual(isNumber(Object(0)), true);
        assert.strictEqual(isNumber(NaN), true);
        assert.strictEqual(isNumber(Infinity), true);
        assert.strictEqual(isNumber(Number.MAX_SAFE_INTEGER), true);
        assert.strictEqual(isNumber(Number(1)), true);
    });

    it('should return `false` for numbers', function() {
        assert.strictEqual(isNumber(arguments), false);
        assert.strictEqual(isNumber([]), false);
        assert.strictEqual(isNumber({}), false);
        assert.strictEqual(isNumber('1'), false);
        assert.strictEqual(isNumber(/a/), false);
        assert.strictEqual(isNumber(Symbol('a')), false);
        assert.strictEqual(isNumber(new Date), false);
        assert.strictEqual(isNumber(new Error), false);
        assert.strictEqual(isNumber(true), false);
        assert.strictEqual(isNumber(null), false);
        assert.strictEqual(isNumber(undefined), false);
    });
});
