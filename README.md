# discount-feature

This application provides a function to calculate discounts based on different criteria such as discount type and user type. It includes robust error handling and modular code structure.

## Features

- Calculate percentage or fixed discounts.
- Double the discount for new users.
- Validate input parameters to ensure correctness.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd discount-feature
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

To use the `calculateDiscount` function, import it into your JavaScript file:

```javascript
const { calculateDiscount } = require('./discount-feature');

const price = 100;
const discount = 10;
const type = 'percentage'; // or 'fixed'
const userType = 'newUser'; // or 'existingUser'

const finalPrice = calculateDiscount(price, discount, type, userType);
console.log(finalPrice); // Output will vary based on the input parameters
```

## Running Tests

This project uses the Jest testing framework. To run the tests, use the following command:

```bash
npm test
```

This will execute all the test cases defined in the `discount-feature.test.js` file and provide a summary of the test results.

## License

This project is licensed under the MIT License.