//import employee from 'employee';
const employee = require('./employee')

test('creates an employee object', () => {
    expect(employee()).toEqual({});
});