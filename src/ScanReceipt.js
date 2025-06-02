import { useState } from 'react';
import Tesseract from 'tesseract.js';

function ScanReceipt() {
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);

  const handleScan = async (file) => {
    const result = await Tesseract.recognize(
      file,
      'eng',
      { logger: m => setProgress(m.progress) }
    );
    setText(result.data.text);
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleScan(e.target.files[0])} />
      <p>Progress: {Math.round(progress * 100)}%</p>
      <textarea value={text} readOnly />
    </div>
  );
}

export default ScanReceipt;