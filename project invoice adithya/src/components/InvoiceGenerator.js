import React, { useState } from 'react';
import InvoicePreview from './InvoicePreview';
import { validateInput } from '../utils/InvoiceUtils';

const InvoiceGenerator = () => {
    const [sellerDetails, setSellerDetails] = useState({});
    const [billingDetails, setBillingDetails] = useState({});
    const [shippingDetails, setShippingDetails] = useState({});
    const [orderDetails, setOrderDetails] = useState({});
    const [invoiceDetails, setInvoiceDetails] = useState({});
    const [items, setItems] = useState([]);
    const [signature, setSignature] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('seller')) {
            setSellerDetails({ ...sellerDetails, [name]: value });
        } else if (name.startsWith('billing')) {
            setBillingDetails({ ...billingDetails, [name]: value });
        } else if (name.startsWith('shipping')) {
            setShippingDetails({ ...shippingDetails, [name]: value });
        } else if (name.startsWith('order')) {
            setOrderDetails({ ...orderDetails, [name]: value });
        } else if (name.startsWith('invoice')) {
            setInvoiceDetails({ ...invoiceDetails, [name]: value });
        } else if (name.startsWith('item')) {
            const index = parseInt(name.split('-')[1]);
            const newItems = [...items];
            newItems[index] = { ...newItems[index], [name.split('-')[0]]: value };
            setItems(newItems);
        }
    };

    const handleSignatureUpload = (e) => {
        setSignature(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateInput({ sellerDetails, billingDetails, shippingDetails, orderDetails, invoiceDetails, items });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setShowPreview(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Input fields for seller, billing, shipping, order, and invoice details */}
                <button type="submit">Generate Invoice</button>
            </form>
            {showPreview && <InvoicePreview sellerDetails={sellerDetails} billingDetails={billingDetails} shippingDetails={shippingDetails} orderDetails={orderDetails} invoiceDetails={invoiceDetails} items={items} signature={signature} />}
        </div>
    );
};

export default InvoiceGenerator;
