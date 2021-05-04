const questions = require('../scripts/questions');

test('returns an ARR of OBJ', () => {
    expect(questions()).toEqual([{}]);
})

test('returns an ARR of OBJ', () => {
    expect(questions()).not.toEqual([]);
})
