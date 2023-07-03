'use client'
import React, { useCallback, useState } from 'react';
import Avocado from './memo/page'
import Link from 'next/link';

const Home = () => {
  return (
    <React.Fragment>
      <h2>Introduction:</h2>
      Its important to know how JS compares primitives and objects
      <Link href={'https://dev-links-seven.vercel.app/docs/JS/Comparison'} target="_blank">comparison</Link>


      <h2>Optimization:</h2>
      <h3>The 4 reasons to explain why react components Rerenders:</h3>

      <p><Link href={'./stateChanges'}>1) State Changes </Link></p>
      <p><Link href={'./parentChanges'}>2) Parent Changes </Link></p>
      <p><Link href={'./contextChanges'}>3) Context Changes </Link></p>
      <p><Link href={'./hooksChanges'}>4) Hooks Changes </Link></p>


      <h3>Rerender Issues:</h3>
      <Link href={'./issue1'}>Creating components in render function </Link>

      <h3>Prevent Rerender:</h3>
      <Link href={'./issue1'}>Composition - Encapsulate state in smaller components </Link>
      <Link href={'./issue1'}>Composition - children as props </Link>
      <Link href={'./issue1'}>Composition - components as props </Link>
      <h3>Component Optimization:</h3>
      <Link href={'./issue1'}>React.memo </Link>
      <Link href={'./issue1'}>Components with props </Link>
      <Link href={'./issue1'}>Component as props or children </Link>


      <h3>Memoization Techniques:</h3>
      <p><Link href={'./stateChanges'}>Problem: Not memoized components will always rerenders when props changes </Link></p>

      <Link href={'./memo'}>Solution: Memoization using useCallback and useMemo. Examples From <Link href={'https://webtips.dev/webtips/react-hooks/usecallback?_branch_match_id=1119042556059019777&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9bLTU3JLM3VS87P1U%2F3yzItMHYLN3NMAgCpG4g8IwAAAA%3D%3D'}>this page</Link> </Link>

      <p><Link href={'./stateChanges'}>Prevent re-renders caused by context - memoize provider </Link></p>
      <p><Link href={'./stateChanges'}>Prevent re-renders caused by context -split data and API </Link></p>
      <p><Link href={'./stateChanges'}>Prevent re-renders caused by context - context selectors </Link></p>
    </React.Fragment>
  );
};


export default Home