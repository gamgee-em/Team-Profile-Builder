const Employee  = require('../lib/employee');

describe('Tests employee.js file', () => {
    test('Employee should have a constructor property', () => {
        expect(Employee).hasOwnProperty(constructor);
    });

    test('Employee Constructor has name/id/email property', () => {
        expect(Employee).hasOwnProperty(constructor.name);
        expect(Employee).hasOwnProperty(constructor.id);
        expect(Employee).hasOwnProperty(constructor.email);
    });

    test('Employee is an object', () => {
        const testEmployee = {};
        expect(typeof(testEmployee)).toBe('object');
    })

    test('Employee is an constructor function', () => {
        expect(typeof(Employee)).toEqual('function');
    });

    test('getRole() method returns a string', () => {
        const testEmployee = new Employee();
        expect(testEmployee.getRole()).toEqual('Employee');
    });

    /* test('getEmail() method returns a string', () => {
        const testEmail = 'sam@email.com';
        expect(Employee.getEmail('sam@email.com')).toEqual(testEmail);
    }); */
});
