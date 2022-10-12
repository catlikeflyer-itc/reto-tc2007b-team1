/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactTestUtils, { renderIntoDocument } from 'react-dom/test-utils';
import { create } from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react'
import SelectInput from '../components/inputs/selectInput/SelectInput';
import dummyData from '../data/dummyData.json';

afterEach(cleanup);
describe('Text input component tests', () => {
    it('should be created with intended data', () => {
        const testUser = dummyData.users.find(e => e.id == 3)
        const selectInput = create(<SelectInput
            label='Nombre' 
            selectOptions={[testUser.name]}
        />)
        ReactTestUtils.isDOMComponent(selectInput)
    });

    it('should render year selector without errors', () => {
        const mockedOnChange = jest.fn();
        const { getByText } = render(<SelectInput 
            options={getYearOptions()} 
            onChange={mockedOnChange} />);

        const placeholder = getByText('Select an option');

        expect(placeholder).toBeTruthy();
    });

    it('should call onChange when selecting multiple options', async () => {
        const mockedOnChange = jest.fn();
        const { getByText, container } = render(<SelectInput 
            options={getYearOptions()} 
            onChange={mockedOnChange} />);
        
        const mySelectComponent = container.getElementsByClassName('mr-4 my-2');

        expect(mySelectComponent).toBeDefined();
        expect(mySelectComponent).not.toBeNull();
        expect(mockedOnChange).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(mySelectComponent.firstChild, { key: 'ArrowDown' });
        await waitForElement(() => getByText('Año'));
        fireEvent.click(getByText('Año'));

        expect(mockedOnChange).toHaveBeenCalledTimes(1);
        expect(mockedOnChange).toHaveBeenCalledWith({label: 'Año', value: 2002});
    });

    it('should call onChange when filtering by input value', () => {
        // render the component.

        // simulate a change on the input field by typing "option 1".
        
        // know, based on my mockedOptions that the filtered result will be "Mocked option 1" and "Mocked option 10".
        
        // simulate 2 ArrowDown events.
        
        // check that the mockedOnChange is called with the 2nd filtered option with right label and value.
    });
})

function getYearOptions() {
    const mockedOptions = [{label: 'Año', values: []}];
    let arr = dummyData.dummyBuscador

    for (var i = 0; i < arr.length; i++) 
    {
        var fecha = arr[i].fecha.slice(0, 3)
        if (!(mockedOptions[0].values.includes(fecha))) 
        {
            mockedOptions[0].values.push(fecha);
        } 
    }

    mockedOptions[0].values.sort()
    return mockedOptions;
}