import React from 'react';
import InvoiceTable from './InvoiceTable';
import { calculateTotalAmount, amountToWords } from '../utils/InvoiceUtils';

const InvoicePreview = ({ sellerDetails, billingDetails, shippingDetails, orderDetails, invoiceDetails, items, signature }) => {
    const totalAmount = calculateTotalAmount(items);

    return (
        <div className="invoice-preview">
            <h1>Invoice</h1>
            <img src="https://via.placeholder.com/150" alt="Company Logo" />
            <div>
                <h2>Seller Details</h2>
                <p>{sellerDetails.name}</p>
                <p>{sellerDetails.address}</p>
                <p>{sellerDetails.city}, {sellerDetails.state} - {sellerDetails.pincode}</p>
                <p>PAN No: {sellerDetails.pan}</p>
                <p>GST No: {sellerDetails.gst}</p>
            </div>
            <div>
                <h2>Billing Details</h2>
                <p>{billingDetails.name}</p>
                <p>{billingDetails.address}</p>
                <p>{billingDetails.city}, {billingDetails.state} - {billingDetails.pincode}</p>
                <p>State/UT Code: {billingDetails.stateCode}</p>
            </div>
            <div>
                <h2>Shipping Details</h2>
                <p>{shippingDetails.name}</p>
                <p>{shippingDetails.address}</p>
                <p>{shippingDetails.city}, {shippingDetails.state} - {shippingDetails.pincode}</p>
                <p>State/UT Code: {shippingDetails.stateCode}</p>
            </div>
            <div>
                <h2>Order Details</h2>
                <p>Order No: {orderDetails.orderNo}</p>
                <p>Order Date: {orderDetails.orderDate}</p>
            </div>
            <div>
                <h2>Invoice Details</h2>
                <p>Invoice No: {invoiceDetails.invoiceNo}</p>
                <p>Invoice Date: {invoiceDetails.invoiceDate}</p>
            </div>
            <InvoiceTable items={items} />
            <div>
                <p>Total Amount: {totalAmount}</p>
                <p>Amount in Words: {amountToWords(totalAmount)}</p>
            </div>
            <div>
                <p>For {sellerDetails.name}:</p>
                {signature && <img src={signature} alt="Signature" />}
                <p>Authorized Signatory</p>
            </div>
        </div>
    );
};

export default InvoicePreview;
