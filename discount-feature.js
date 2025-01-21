// Main function to calculate the discount
const calculateDiscount = (price, discount, type, userType = 'existingUser') => {
    // Validate input parameters
    if (!isValidInput(price, discount, type)) {
        throw new Error('Invalid input parameters');
    }

    // Calculate the final discount based on type and user type
    let finalDiscount = calculateFinalDiscount(price, discount, type, userType);
    return Math.max(0, price - finalDiscount); // Ensure the final price is not negative
}

// Helper function to validate input parameters
const isValidInput = (price, discount, type) => {
    if (typeof price !== 'number' || price < 0) {
        return false;
    }

    if (typeof discount !== 'number' || discount < 0) {
        return false;
    }

    if (type !== 'percentage' && type !== 'fixed') {
        return false;
    }

    return true;
}

// Helper function to calculate the final discount
const calculateFinalDiscount = (price, discount, type, userType) => {
    let finalDiscount = discount;

    // Calculate percentage discount
    if (type === 'percentage') {
        finalDiscount = price * discount / 100;
    }

    // Double the discount for new users
    if (userType === 'newUser') {
        finalDiscount *= 2;
    }

    return finalDiscount;
}

module.exports = { calculateDiscount, isValidInput, calculateFinalDiscount };


