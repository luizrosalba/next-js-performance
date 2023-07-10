'use client'
import Link from 'next/link';
import React, { createContext, useCallback, useContext, useState } from 'react';

const useCount = () => {
    const [count, setCount] = useState(0);
    return { count, setCount }
}

const Parent = () => {
    const { count, setCount } = useCount() /// when value changes

    console.log('Parent rerender')
    return (
        <>
            {/* will rerender when Parent rerenders */}
            <div>Parent</div>
            <button onClick={() => setCount(count + 1)}>Click to Add</button>
        </>

    );
};

const HooksChanges = () => {

    console.log('rerenders')
    return (
        <>
            <p>
                Everything that is happening inside a hook “belongs” to the component that uses it. The same rules regarding Context and State changes apply here:
            </p>
            <p>
                State change inside the hook will trigger an unpreventable re-rerender of the “host” component
            </p>
            <p>
                If the hook uses Context and Context’s value changes, it will trigger an unpreventable re-rerender of the “host” component

            </p>
            <p>
                Hooks can be chained. Every single hook inside the chain still “belongs” to the “host” component, and the same rules apply to any of them.
            </p>
            <p>Click on the button and look at console.log</p>
            <Parent />
            <div>
                <Link href='https://next-js-performance.vercel.app/hooksChanges'>Link to Code</Link>

            </div>
        </>
    );
};



export default HooksChanges