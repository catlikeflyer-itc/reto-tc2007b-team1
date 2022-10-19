/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { create } from 'react-test-renderer'
import { render, cleanup } from '@testing-library/react'
import MainButton from '../components/buttons/mainButton/mainButton';


afterEach(cleanup);
describe('Main button component testing', () => {
    // Testing click event
    it('should simulate login/register button creation', () => {
        const loginButton = create(<MainButton 
            label={'Iniciar sesión'} 
            color={'bg-green-500'}
            hoverColor={'hover:bg-blue-600'}
        />)
        ReactTestUtils.Simulate.click(loginButton)
    })
})