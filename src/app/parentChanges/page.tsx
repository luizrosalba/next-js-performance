'use client'
import React, { useCallback, useState } from 'react';
import MdCode from './mdCode.mdx'
const Child = () => {
    console.log('Child rerender')
    return (
        <div>{'====>'}Child</div>
    )
}

const Parent = () => {
    const [count, setCount] = useState(0);
    console.log('Parent rerender')
    return (
        <>
            {/* will rerender when Parent rerenders */}
            <div>Parent</div>
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

            <Parent />
            <div className='code'>
                <MdCode />
            </div>

        </React.Fragment>
    );
};



export default ParentChanges