const move = require('../../services/move');

describe('get move', () => {
    
    test('should return integer', () => {
        expect(typeof move.getMove(Array(9).fill(null))).toBe('number');
    });

    it.each([9, 4, 20])('is at most %i when array length %i',(i) => {
        expect(move.getMove(Array(i).fill(null))).toBeLessThanOrEqual(i);
    });
    
    it.each([null, undefined, [] ])('throws exception when empty (%s)',(x) => {
        expect(() => {
            move.getMove(x);
        }).toThrowError('empty');
    });

    it.each([1, "foo", {foo: 'bar'}])('throws exception when is not array (%s)',(x) => {
        expect(() => {
            move.getMove(x);
        }).toThrowError('not array');
    });
});

