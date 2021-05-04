//import employee from 'employee';
const employee = require('../scripts/employee')

test('creates an OBJECT', () => {
    expect(employee()).toEqual({})
});

test('func not an array', () => {
    expect(employee()).not.toEqual([])
});