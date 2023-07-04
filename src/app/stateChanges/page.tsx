'use client'
import Link from 'next/link';
import React, { useCallback, useState } from 'react';

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
            <div>

                <Link href='https://dev-links-seven.vercel.app/docs/ReactJS/Rerender#1-state-changes'>Link to Code</Link>
            </div>


        </React.Fragment>
    );
};


export default StateChanges