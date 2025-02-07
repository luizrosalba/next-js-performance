'use client'
import Link from 'next/link';
import React, { createContext, useCallback, useContext, useState } from 'react';

const ExampleContext = createContext([]);

const Parent = () => {
    const [count, setCount] = useContext(ExampleContext); /// when value changes
    console.log('Component rerender')
    return (
        <>
            {/* will rerender when Parent rerenders */}
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>
                Change Context Value
            </button>
        </>

    );
};

const ContextChanges = (): JSX.Element => {

    console.log('rerenders')
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <p>
                When the value in Context Provider changes, all components that use this Context will re-render, even if they don’t use the changed portion of the data directly. Those re-renders can not be prevented with memoization directly, but there are a few workarounds that can simulate it (see preventing re-renders caused by Context)
            </p>
            <p>Click on the button and look at console.log</p>
            <ExampleContext.Provider value={[count, setCount]}>
                <Parent />
            </ExampleContext.Provider>
            <div>
                <Link href='https://next-js-performance.vercel.app/contextChanges'>Link to Code</Link>

            </div>
        </React.Fragment>
    );
};



export default ContextChanges