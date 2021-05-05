const questions = require('../scripts/lib/Questions');

test('returns an ARR of OBJ', () => {
    expect(questions()).toEqual([{}]);
})

test('returns an ARR of OBJ', () => {
    expect(questions()).not.toEqual([]);
})
