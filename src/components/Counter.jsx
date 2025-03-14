import { useState } from "react";

export const Counter = ({ count, setCount }) => {
    const handleIncrement = () => {
        setCount(count + 1);
    }
    let name = "anil";
    return (
        <div>
            {
                name
            }
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>increment</button>
        </div>
    );
}