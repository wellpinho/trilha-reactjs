import { useState } from "react"

export const Contador = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="buttton" onClick={increment}>
        Increments
      </button>
    </div>
  );
}

export default Contador;
