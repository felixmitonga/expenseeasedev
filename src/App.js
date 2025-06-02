
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScanReceipt from './ScanReceipt';
import Reports from './Reports';
import AddExpense from './AddExpense';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/scan" element={<ScanReceipt />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/AddExpense" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;

