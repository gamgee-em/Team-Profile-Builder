const intern = require('../scripts/lib/Intern');

test('returns an OBJECT', () => {
    expect(intern()).toEqual({});
})