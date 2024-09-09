import axios from 'axios';

const createInvoice = async (invoiceData) => {
    try {
        const response = await axios.post('https://api.example.com/invoices', invoiceData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating invoice: ' + error.message);
    }
};

export { createInvoice };
