const engineer = require('../scripts/engineer');

test('returns an OBJECT', () => {
    expect(engineer()).toEqual({});
});