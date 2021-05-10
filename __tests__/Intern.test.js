const Intern  = require('../lib/Intern');

describe('Tests employee.js file', () => {
    
    test('Intern class has a constructor', () => {
        expect(Intern).hasOwnProperty(constructor);
    });

    test('Intern Constructor has name/id/email property', () => {
        expect(Intern).hasOwnProperty(constructor.name);
        expect(Intern).hasOwnProperty(constructor.id);
        expect(Intern).hasOwnProperty(constructor.email);
    });

    test('Intern is an object', () => {
        const testIntern = {};
        expect(typeof(testIntern)).toBe('object');
    })

    test('Intern is an constructor function', () => {
        expect(typeof(Intern)).toEqual('function');
    });

    test('getRole() method returns a string', () => {
        const testIntern = new Intern();
        expect(testIntern.getRole()).toEqual('Intern');
    });
});