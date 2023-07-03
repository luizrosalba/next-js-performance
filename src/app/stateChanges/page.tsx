'use client'
import React, { useCallback, useState } from 'react';
import MdCode from './mdCode.mdx'

const StateChanges = () => {
    const [count, setCount] = useState(0);
    console.log('rerenders')
    return (
        <React.Fragment>
            <p>
                When a component’s state changes, it will re-render itself. Usually, it happens either in a callback or in useEffect hook.
                State changes are the “root” source of all re-renders.
            </p>
            <p>Click on the button and look at console.log</p>
            <div>Rerender {count}</div>
            <button onClick={() => setCount(count + 1)}>Click to Add</button>
            <MdCode />
        </React.Fragment>
    );
};


export default StateChanges