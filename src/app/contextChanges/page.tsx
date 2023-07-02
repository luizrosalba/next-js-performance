'use client'
import React, { createContext, useCallback, useContext, useState } from 'react';

const ExampleContext = createContext(0);

const Parent = () => {
    const useValue = useContext(ExampleContext) /// when value changes
    const [count, setCount] = useState(0);
    console.log('Parent rerender')
    return (
        <>
            {/* will rerender when Parent rerenders */}
            <div>Parent</div>
            <button onClick={() => setCount(count + 1)}>Click to Add</button>
        </>

    );
};

export const ParentChanges = () => {

    console.log('rerenders')
    const level = useContext(ExampleContext);
    return (
        <React.Fragment>
            <p>
                When the value in Context Provider changes, all components that use this Context will re-render, even if they don’t use the changed portion of the data directly. Those re-renders can not be prevented with memoization directly, but there are a few workarounds that can simulate it (see preventing re-renders caused by Context)
            </p>
            <p>Click on the button and look at console.log</p>
            <ExampleContext.Provider value={level + 1}>
                <Parent />
            </ExampleContext.Provider>

        </React.Fragment>
    );
};



export default ParentChanges