import { useState } from "https://esm.sh/preact/hooks";
import withHydration from "../../lib/withHydration.jsx";
const Counter = ({ start }) => {
  const [count, setCount] = useState(start || 0);
  return (
    <counter>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </counter>
  );
};
export default withHydration(Counter);
