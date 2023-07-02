'use client'
import React, { useCallback, useState } from 'react';

const Avocado = () => {
    const [count, setCount] = useState(0);

    // Will cause rerenders no cache 
    // const addAvocado = () => {
    //   setCount(count + 1);
    // };

    const memoizedAddvocado = useCallback(() => {
        setCount((c) => c + 1);
    }, [setCount]);

    return (
        <React.Fragment>
            <p>Example: Avoiding rerenders using React.memo and useCallback. </p>
            <p> Memoized Addvocado, will only rerender if props (memoizedAddvocado) change . Since props are cached , will not change  </p>
            <p>Click Button . Check console.log,  addAvocado will cause rerenders </p>
            <p>Click Button . Check console.log,  memoizedAddvocado will not cause rerenders </p>
            <Addvocado add={memoizedAddvocado} />
            <div>{Array(count).fill('🥑').join(',')}</div>
        </React.Fragment>
    );
};

/// Memoized , will only rerender if props change . Since props are cached , will not change 
const Addvocado = React.memo(({ add }: { add: () => void }) => {
    console.log('component re-rendered');

    return <button onClick={add}>Add avocado</button>;
});

Addvocado.displayName = 'Addvocado';

export default Avocado