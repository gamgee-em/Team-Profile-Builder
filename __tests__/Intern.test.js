const intern = require('../lib/Intern');

test('returns an OBJECT', () => {
    expect(intern()).toEqual({});
})