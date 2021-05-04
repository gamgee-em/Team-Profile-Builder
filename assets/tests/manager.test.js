const manager = require('../scripts/manager');

test('returns an OBJECT', () => {
    expect(manager()).toEqual({});
})