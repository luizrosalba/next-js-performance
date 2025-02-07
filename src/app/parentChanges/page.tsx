'use client'
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
const Child = () => {
    console.log('Child rerender')
    {/* will rerender when Parent rerenders */ }
    return (
        <>
            <div>{'====>'}Child</div>
        </>
    )
}

const Parent = () => {
    const [count, setCount] = useState(0);
    console.log('Parent rerender')
    return (
        <>
            <div>Parent</div>
            <div>Look at console </div>
            <Child />
            <button onClick={() => setCount(count + 1)}>Click to Add</button>
        </>

    );
};

const ParentChanges = () => {

    console.log('rerenders')

    return (
        <React.Fragment>
            <p>
                A component will re-render itself if its parent re-renders. Or, if we look at this from the opposite direction: when a component re-renders, it also re-renders all its children.
            </p>
            <p>
                It always goes “down” the tree: the re-render of a child doesn’t trigger the re-render of a parent. (There are a few caveats and edge cases here, see the full guide for more details: The mystery of React Element, children, parents and re-renders).
            </p>
            <p>Click on the button and look at console.log</p>
            <div>
                <Link href='https://dev-links-seven.vercel.app/docs/ReactJS/Rerender#2-parent-or-children-re-renders'>Link to Code</Link>

            </div>
            <Parent />
        </React.Fragment>
    );
};



export default ParentChanges