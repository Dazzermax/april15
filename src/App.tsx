import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1>Styled components</h1>
      <Button onClick={() => setCount((p) => p + 1)} />
      <div>{count}</div>
    </div>
  );
}

export default App;
