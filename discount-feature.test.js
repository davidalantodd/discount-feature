const { calculateDiscount } = require('./discount-feature');

describe('calculateDiscount', () => {
    it('should return the remaining amount after applying the discount', () => {
        expect(calculateDiscount(100, 10, 'percentage', 'newUser')).toBe(80); // 10% of 100 is 10, doubled is 20, so 100 - 20 = 80
        expect(calculateDiscount(100, 10, 'fixed', 'newUser')).toBe(80); // 10 fixed discount doubled is 20, so 100 - 20 = 80
        expect(calculateDiscount(100, 10, 'percentage', 'existingUser')).toBe(90); // 10% of 100 is 10, so 100 - 10 = 90
        expect(calculateDiscount(100, 10, 'fixed', 'existingUser')).toBe(90); // 10 fixed discount, so 100 - 10 = 90
    });

    it('should return the remaining amount after applying the discount for edge cases', () => {
        expect(calculateDiscount(0, 10, 'percentage', 'newUser')).toBe(0);
        expect(calculateDiscount(0, 10, 'fixed', 'newUser')).toBe(0);
        expect(calculateDiscount(0, 10, 'percentage', 'existingUser')).toBe(0);
        expect(calculateDiscount(0, 10, 'fixed', 'existingUser')).toBe(0);

        expect(calculateDiscount(100, 0, 'percentage', 'newUser')).toBe(100); // 0% discount
        expect(calculateDiscount(100, 0, 'fixed', 'newUser')).toBe(100); // 0 fixed discount
        expect(() => calculateDiscount(100, -10, 'percentage', 'newUser')).toThrow('Invalid input parameters'); // negative discount should throw error
        expect(() => calculateDiscount(100, -10, 'fixed', 'newUser')).toThrow('Invalid input parameters'); // negative discount should throw error

        expect(calculateDiscount(100, 10, 'percentage', '')).toBe(90); // no user type defaults to existingUser
        expect(calculateDiscount(100, 10, 'fixed', '')).toBe(90); // no user type defaults to existingUser
        expect(() => calculateDiscount(100, 10, '', 'newUser')).toThrow('Invalid input parameters'); // no discount type should throw error
        expect(() => calculateDiscount(100, 10, '', 'existingUser')).toThrow('Invalid input parameters'); // no discount type should throw error
    });

    it('should handle missing parameters gracefully', () => {
        expect(() => calculateDiscount(100)).toThrow('Invalid input parameters'); // missing discount value and type should throw error
        expect(() => calculateDiscount(100, 10)).toThrow('Invalid input parameters'); // missing discount type should throw error
        expect(calculateDiscount(100, 10, 'percentage')).toBe(90); // missing user type, defaults to existingUser
        expect(() => calculateDiscount()).toThrow('Invalid input parameters'); // missing all parameters should throw error
    });
});