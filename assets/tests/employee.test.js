//import employee from 'employee';
const { Employee, employee }= require('../scripts/employee')

test('Employee class has a constructor', () => {
    expect(Employee).hasOwnProperty(constructor)
})

test('Employee Constructor has role/name/email key', () => {
    expect(Employee.constructor).hasOwnProperty(constructor.role);
    expect(Employee.constructor).hasOwnProperty(constructor.name);
    expect(Employee.constructor).hasOwnProperty(constructor.email);

})

test('Employee Constructor has role key', () => {
    expect(Employee.constructor).hasOwnProperty(constructor.role)
})

test('creates an OBJECT', () => {
    expect(employee()).toEqual({})
});

test('func not an array', () => {
    expect(employee()).not.toBe([])
});