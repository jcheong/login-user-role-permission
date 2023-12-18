import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>      
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>    
    </div>
  );
}

export default MyComponent;