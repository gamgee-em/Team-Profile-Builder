const Manager = require('../lib/Manager');

describe('Tests manager.js file', () => {

    test('Manager class has a constructor', () => {
        expect(Manager).hasOwnProperty(constructor);
    })

    test('Manager Constructor has name/id/email property', () => {
        expect(Manager).hasOwnProperty(constructor.name);
        expect(Manager).hasOwnProperty(constructor.id);
        expect(Manager).hasOwnProperty(constructor.email);
    });

    test('Manager is an object', () => {
        const testManager = {};
        expect(typeof(testManager)).toBe('object');
    })

    test('Manager is an constructor function', () => {
        expect(typeof(Manager)).toEqual('function');
    });

    test('getRole() method returns a string', () => {
        const testManager = new Manager();
        expect(testManager.getRole()).toEqual('Manager');
    });
});