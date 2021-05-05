const manager = require('../lib/Manager');

test('returns an OBJECT', () => {
    expect(manager()).toEqual({});
})