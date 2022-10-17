/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react'
import TextInput from '../components/inputs/textInput/textInput.jsx';
import dummyData from '../data/dummyData.json';

afterEach(cleanup);
describe('Text input component tests', () => {
    it('should simulate email text input field creation', () => {
        const testUser = dummyData.users.find(e => e.id == 3)
        const emailField = create(<TextInput
            labelx={"Correo"}
            placeholder="Ingresa tu correo"
        />)
        emailField.value = testUser.email
        ReactTestUtils.Simulate.keyDown(emailField, {key: "Enter", keyCode: 13, which: 13});
        ReactTestUtils.isDOMComponent(emailField)
    })
    it('should simulate password text input field creation', () => {
        const testUser = dummyData.users.find(e => e.id == 3)
        const passwordField = create(<TextInput
            labelx={"Contraseña"}
            placeholder="Ingresa tu contraseña"
        />)
        passwordField.value = testUser.password
        ReactTestUtils.Simulate.keyDown(passwordField, {key: "Enter", keyCode: 13, which: 13});
        ReactTestUtils.isDOMComponent(passwordField)
    })
})