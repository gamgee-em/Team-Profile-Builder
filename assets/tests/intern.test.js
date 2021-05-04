const intern = require('../scripts/intern');

test('returns an OBJECT', () => {
    expect(intern()).toEqual({});
})