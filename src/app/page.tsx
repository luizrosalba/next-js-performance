'use client'
import React, { useState } from 'react';

const Avocado = () => {
  const [count, setCount] = useState(0);

  const addAvocado = () => {
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      <Addvocado add={addAvocado} />
      <div>{Array(count).fill('🥑').join(',')}</div>
    </React.Fragment>
  );
};

const Addvocado = ({ add }: { add: () => void }) => {
  console.log('component re-rendered');

  return <button onClick={add}>Add avocado</button>;
};

export default Avocado