const calculateDiscount = (price, discount, type, userType = 'existingUser') => {
    if (!isValidInput(price, discount, type)) {
        throw new Error('Invalid input parameters');
    }

    let finalDiscount = calculateFinalDiscount(price, discount, type, userType);
    return Math.max(0, price - finalDiscount);
}

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

const calculateFinalDiscount = (price, discount, type, userType) => {
    let finalDiscount = discount;

    if (type === 'percentage') {
        finalDiscount = price * discount / 100;
    }

    if (userType === 'newUser') {
        finalDiscount *= 2;
    }

    return finalDiscount;
}

module.exports = { calculateDiscount, isValidInput, calculateFinalDiscount };


