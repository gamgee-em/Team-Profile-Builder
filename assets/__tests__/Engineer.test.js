const engineer = require('../scripts/lib/Engineer');

test('returns an OBJECT', () => {
    expect(engineer()).toEqual({});
});