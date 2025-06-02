import { db, auth } from './firebase';

function AddExpense() {
  const [expense, setExpense] = useState({
    date: '', amount: '', vendor: '', category: 'Medical Supplies'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('expenses').add({
      ...expense,
      userId: auth.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    alert('Expense saved!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={expense.date} onChange={(e) => setExpense({...expense, date: e.target.value})} />
      <input type="number" value={expense.amount} onChange={(e) => setExpense({...expense, amount: e.target.value})} />
      <select value={expense.category} onChange={(e) => setExpense({...expense, category: e.target.value})}>
        <option value="Medical Supplies">Medical Supplies</option>
        <option value="Travel">Travel</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}