import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase'; // Make sure this path is correct
function Reports() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const snapshot = await db.collection('expenses')
        .where('userId', '==', auth.currentUser.uid)
        .get();
      setExpenses(snapshot.docs.map(doc => doc.data()));
    };
    fetchExpenses();
  }, []);

  const exportToCSV = () => {
    const csv = expenses.map(e => `${e.date},${e.amount},${e.category}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'expenses.csv';
    link.click();
  };

  return (
    <div>
      <button onClick={exportToCSV}>Export to CSV</button>
      <table>{/* Render expenses */}</table>
    </div>
  );
}
export default Reports;