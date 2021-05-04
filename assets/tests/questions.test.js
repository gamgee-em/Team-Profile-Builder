const questions = require('../scripts/questions');

test('returns an array', () => {
    expect(questions()).toEqual([]);
})