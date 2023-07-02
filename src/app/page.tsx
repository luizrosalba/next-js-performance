'use client'
import React, { useCallback, useState } from 'react';

const Avocado = () => {
  const [count, setCount] = useState(0);

  // const addAvocado = () => {
  //   setCount(count + 1);
  // };

  const memoizedAddvocado = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <React.Fragment>
      <Addvocado add={memoizedAddvocado} />
      <div>{Array(count).fill('🥑').join(',')}</div>
    </React.Fragment>
  );
};

const Addvocado = React.memo(({ add }: { add: () => void }) => {
  console.log('component re-rendered');

  return <button onClick={add}>Add avocado</button>;
});

Addvocado.displayName = 'Addvocado';

export default Avocado