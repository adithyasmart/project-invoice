import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InvoiceGenerator from '../src/components/InvoiceGenerator';

test('renders InvoiceGenerator component', () => {
    const { getByText } = render(<InvoiceGenerator />);
    expect(getByText(/Generate Invoice/i)).toBeInTheDocument();
});

test('handles input changes correctly', () => {
    const { getByLabelText } = render(<InvoiceGenerator />);
    const sellerNameInput = getByLabelText(/Seller Name/i);
    fireEvent.change(sellerNameInput, { target: { value: 'Test Seller' } });
    expect(sellerNameInput.value).toBe('Test Seller');
});
