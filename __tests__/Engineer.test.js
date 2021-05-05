const engineer = require('../lib/Engineer');

test('returns an OBJECT', () => {
    expect(engineer()).toEqual({});
});