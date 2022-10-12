/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import ReactTestUtils from 'react-dom/test-utils';
 import { screen, create } from 'react-test-renderer';
 import { render, cleanup } from '@testing-library/react'
 import Navbar from '../components/navbar/navbar.jsx';
 import data from '../data/staticData.json';

 afterEach(cleanup);
 describe('Navbar testing with react', () => {
    it('should render navbar correctly', () => {
        const navbarInstance = render(<Navbar data={data}/>)
        ReactTestUtils.isDOMComponent(navbarInstance)
    })
 })
