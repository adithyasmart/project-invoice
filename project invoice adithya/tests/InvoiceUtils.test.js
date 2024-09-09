import { calculateNetAmount, calculateTax, amountToWords, calculateTotalAmount } from '../src/utils/InvoiceUtils';

describe('InvoiceUtils', () => {
    test('calculates net amount correctly', () => {
        expect(calculateNetAmount({ unitPrice: 100, quantity: 2, discount: 10 })).toBe(190);
    });

    test('calculates tax correctly', () => {
        expect(calculateTax(190, 18)).toBe(34.2);
    });

    test('calculates total amount correctly', () => {
        const items = [
            { unitPrice: 100, quantity: 2, discount: 10, taxRate: 18 },
            { unitPrice: 200, quantity: 1, discount: 20, taxRate: 18 },
        ];
        expect(calculateTotalAmount(items)).toBe(414.2);
    });
});
