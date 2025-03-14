import { Counter } from "./Counter"
import { useState } from "react";
export const ParentCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter: 0</h2>
            <Counter count={count} setCount={setCount}/>
            <Counter count={count} setCount={setCount}/>
            <Counter count={count} setCount={setCount}/>
            
        </div>
    )
}