'use client'
import React, { useCallback, useState } from 'react';
import Avocado from './memo/page'
import Link from 'next/link';

const Home = () => {
  return (
    <React.Fragment>
      <Link href={'/memo'}>Memoization using useCallback and useMemo </Link>
    </React.Fragment>
  );
};


export default Home