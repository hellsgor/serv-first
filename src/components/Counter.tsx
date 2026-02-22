import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  }

  const decrese = () => {
    setCount((prev) => prev - 1);
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', columnGap: '8px'}}>
      <button onClick={decrese}>-</button>
      <p style={{fontWeight: '700', fontVariantNumeric: 'tabular-nums'}}>{count}</p>
      <button onClick={increase}>+</button>
    </div>
  )
}
