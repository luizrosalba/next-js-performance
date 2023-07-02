'use client'
import React, { useCallback, useState } from 'react';
import Avocado from './memo/page'
import Link from 'next/link';

const Home = () => {
  return (
    <React.Fragment>
      <p>This page aims to explain why components Rerender</p>
      <p><Link href={'./stateChanges'}>1) State Changes </Link></p>
      <p><Link href={'./parentChanges'}>2) Parent Changes </Link></p>
      <p><Link href={'./stateChanges'}>3) Context Changes </Link></p>
      <p><Link href={'./stateChanges'}>4) Hooks Changes </Link></p>
      <p><Link href={'./stateChanges'}>5) Not memoized components will always rerenders when props changes </Link></p>

      <Link href={'./memo'}>Memoization using useCallback and useMemo. Examples From <Link href={'https://webtips.dev/webtips/react-hooks/usecallback?_branch_match_id=1119042556059019777&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9bLTU3JLM3VS87P1U%2F3yzItMHYLN3NMAgCpG4g8IwAAAA%3D%3D'}>this page</Link> </Link>
    </React.Fragment>
  );
};


export default Home