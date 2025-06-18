/*
useEffect() : React Hook that tells React DO some code when (pick one):
This component re-renders
This component mounts
The state of a value

useEffect(function, [dependencies])

useEffect(() => {}) Runs after every re-render
useEffect(() => {}, []) Runs only on mount
useEffect(() => {}, [value]) Runs after on mount and when the value changes

USES: 
Event Listeners
DOM Manipulation
Subscriptions (real-time updates)
Fetching data from an API
Clean up when a component unmounts */

import React, {useState, useEffect} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    const [color, setColor] = useState("green");

    useEffect(()=> {
        document.title = `My Counter Program`;
    }, []); // empty array for not changing the title on each click.No empty array or value if we want to change the title on each action.

    function addCount(){
        setCount(count => count + 1);
    }

    function subtractCount(){
        setCount(count => count -1);
    }

    function changeColor(){
        setColor(color => color === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style = {{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button> <br/>
            <button onClick={changeColor}>Change color</button>
        </div>
    );
}

export default MyComponent