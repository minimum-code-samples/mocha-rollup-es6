/*
 * We can't use import as-is because it is not recognized by Mocha.
 * Will throw an "SyntaxError: Unexpected token import" error.
 */
import * as converter from '../src/converter.js';

/*
 * We can use require here but if the module is using ES6 export instead of CommonJS, we still end up with a similar error: "SyntaxError: Unexpected token export".
 */
//var converter = require('../src/converter.js');
var expect = require('chai').expect;

describe('Converter', function () {
    describe('toLb', function () {
        it('should convert correctly', function () {
            var results = converter.toLb(1);

            expect(results).to.equal(2.205);
        });
    });
});

