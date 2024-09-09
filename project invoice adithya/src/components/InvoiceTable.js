import React from 'react';
import { calculateNetAmount, calculateTax } from '../utils/InvoiceUtils';

const InvoiceTable = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Net Amount</th>
                    <th>Tax Amount</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    const netAmount = calculateNetAmount(item);
                    const taxAmount = calculateTax(netAmount, item.taxRate);
                    return (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.quantity}</td>
                            <td>{item.discount}</td>
                            <td>{netAmount}</td>
                            <td>{taxAmount}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default InvoiceTable;
