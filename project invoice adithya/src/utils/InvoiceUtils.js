export const calculateNetAmount = ({ unitPrice, quantity, discount }) => {
    return (unitPrice * quantity) - discount;
};

export const calculateTax = (netAmount, taxRate) => {
    return netAmount * (taxRate / 100);
};

export const amountToWords = (amount) => {
    // Function to convert number to words
    return 'One Thousand'; // Placeholder implementation
};

export const validateInput = (data) => {
    const errors = {};
    // Validation logic here
    return errors;
};

export const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => {
        const netAmount = calculateNetAmount(item);
        const taxAmount = calculateTax(netAmount, item.taxRate);
        return total + netAmount + taxAmount;
    }, 0);
};
