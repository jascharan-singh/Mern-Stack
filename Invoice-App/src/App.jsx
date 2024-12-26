import { useState } from "react";
import InvoiceCard from "./InvoiceCard";


function App() {
  const [invoices, setInvoices] = useState([
    { invoiceNumber: 101, clientName: "John Doe", amount: 250, status: "Paid" },
    { invoiceNumber: 102, clientName: "Jane Smith", amount: 300, status: "Pending" },
  ]);

  const markAsPaid = (invoiceNumber) => {
    setInvoices((prevInvoices) =>
      prevInvoices.map((invoice) =>
        invoice.invoiceNumber === invoiceNumber
          ? { ...invoice, status: "Paid" }
          : invoice
      )
    );
  };

  return (
    <div>
      <h1>Invoice List</h1>
      {invoices.map((invoice, index) => (
        <InvoiceCard
          key={index}
          invoiceNumber={invoice.invoiceNumber}
          clientName={invoice.clientName}
          amount={invoice.amount}
          status={invoice.status}
          markAsPaid={() => markAsPaid(invoice.invoiceNumber)}
        />
      ))}
    </div>
  );
}

export default App;
