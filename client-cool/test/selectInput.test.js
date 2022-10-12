/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import { screen, render, fireEvent, cleanup, waitForElement, userEvent, getAllByRole, getAllByTestId } from '@testing-library/react'
import SelectInput from '../components/inputs/selectInput/SelectInput';
import dummyData from '../data/dummyData.json';

afterEach(cleanup);
describe('Selector component tests', () => {

    // Generate name options list from static data
    const nameOptions = getNameOptions();
    // Generate year options list from static data
    const yearOptions = getYearOptions();

    it('should create name selector with intended data', () => {
        const selectInput = create(<SelectInput
            label={nameOptions.label}
            selectOptions={nameOptions.selectOptions}
        />)
        expect(selectInput).toBeTruthy();
        ReactTestUtils.isDOMComponent(selectInput)
    });

    it('should render name selector with intended data', () => {
        const { getByRole } = render(<SelectInput
            label={nameOptions.label}
            selectOptions={nameOptions.selectOptions}
        />)
        const selector = getByRole('combobox')

        expect(selector).toBeTruthy();
        ReactTestUtils.isDOMComponent(selector)
    });

    it('should create year selector with intended data', () => {
        const selectInput = create(<SelectInput
            label={yearOptions.label}
            selectOptions={yearOptions.selectOptions}
        />)
        expect(selectInput).toBeTruthy();
        ReactTestUtils.isDOMComponent(selectInput)
    });

    it('should render year selector without errors', () => {
        const { getByRole } = render(<SelectInput 
            label={yearOptions.label}
            selectOptions={yearOptions.selectOptions}
        />);

        const selector = getByRole('combobox')

        expect(selector).toBeTruthy();
        ReactTestUtils.isDOMComponent(selector)
    });

    it('should render correct number of name options', () => {
        render(<SelectInput
            label={nameOptions.label}
            selectOptions={nameOptions.selectOptions}
        />)
        expect(screen.getAllByRole('option').length).toBe(nameOptions.selectOptions.length)
    });

    it('should render correct number of year options', () => {
        render(<SelectInput
            label={yearOptions.label}
            selectOptions={yearOptions.selectOptions}
        />)
        expect(screen.getAllByRole('option').length).toBe(yearOptions.selectOptions.length)
    });

    // NOT WORKING - CAN'T SELECT NAME WITHION APP
    // it('should allow user to select name', () => {
    //     const { getByTestId, getAllByTestId } = render(<SelectInput
    //         label={nameOptions.label}
    //         selectOptions={nameOptions.selectOptions}
    //     />)

    //     fireEvent.click(getByTestId('select'), { target: { value: nameOptions.selectOptions[0] } })
    //     let options = getAllByTestId('select-option')

    //     expect(options[0].selected).toBe(true);

    //     for (var i = 1; i < options.length; i++) {
    //         expect(options[i].selected).toBe(false);
    //     }
    // })
})

function getYearOptions() {
    const yearOptions = { label: 'Año', selectOptions: Array() };
    let arr = dummyData.dummyBuscador

    for (var i = 0; i < arr.length; i++) 
    {
        var fecha = arr[i].fecha.slice(0, 3)
        if (! (yearOptions.selectOptions.includes(fecha)) )
        {
            yearOptions.selectOptions.push(fecha);
        } 
    }

    yearOptions.selectOptions.sort();
    return yearOptions;
}

function getNameOptions() {
    const nameOptions = { label: 'Nombre', selectOptions: Array() };
    let arr = dummyData.users

    for (var i = 0; i < arr.length; i++) 
    {
        var nombre = arr[i].name
        if (! (nameOptions.selectOptions.includes(nombre)) )
        {
            nameOptions.selectOptions.push(nombre);
        } 
    }

    nameOptions.selectOptions.sort();
    return nameOptions;
}