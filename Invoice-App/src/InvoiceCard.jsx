function InvoiceCard({ invoiceNumber, clientName, amount, status, markAsPaid }) {
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h3>Invoice #{invoiceNumber}</h3>
        <p>Client: {clientName}</p>
        <p>Amount: ${amount}</p>
        <p>Status: {status}</p>
        {status === "Pending" && (
          <button onClick={markAsPaid} style={{ marginTop: "10px" }}>
            Mark as Paid
          </button>
        )}
      </div>
    );
  }
  export default InvoiceCard