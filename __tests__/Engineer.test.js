const Engineer = require('../lib/Engineer');

describe('Tests engineer.js file', () => {

    test('Engineer class has a constructor', () => {
        expect(Engineer).hasOwnProperty(constructor);
    })

    test('Engineer Constructor has name/id/email property', () => {
        expect(Engineer).hasOwnProperty(constructor.name);
        expect(Engineer).hasOwnProperty(constructor.id);
        expect(Engineer).hasOwnProperty(constructor.email);
    });

    test('Engineer is an object', () => {
        const testEngineer = {};
        expect(typeof(testEngineer)).toBe('object');
    })

    test('Engineer is an constructor function', () => {
        const testEngineer = new Engineer();
        expect(typeof(Engineer)).toEqual('function');
    });

    test('getRole() method returns a string', () => {
        const testEngineer = new Engineer();
        expect(testEngineer.getRole()).toEqual('Engineer');
    });
});