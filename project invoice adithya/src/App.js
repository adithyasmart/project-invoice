import React from 'react';
import InvoiceGenerator from './components/InvoiceGenerator';
import './styles/Invoice.css';

const App = () => {
    return (
        <div className="app">
            <h1>Invoice Generator</h1>
            <InvoiceGenerator />
        </div>
    );
};

export default App;
