/*
import {screen, cleanup} from '@testing-library/react';
import {shallow, configure, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainButton from '../components/buttons/mainButton/mainButton.jsx';
import TextInput from '../components/inputs/textInput/textInput.jsx';
import MainAuth from '../components/sections/mainAuth.jsx/mainAuth.jsx';

import data from "../data/staticData.json";
import { useAppContext } from "../context/AppContext";

configure({adapter: new Adapter()});


afterEach(cleanup);
*/

/* Waiting for context to be ready
describe('MainAuth', () => {
    it('should render the component', () => {
        const wrapper = shallow(<MainAuth data={data} />);
        expect(screen.getByText('Ingresa tu correo')).toBeInTheDocument();
        expect(screen.getByText('Ingresa tu contraseña')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(wrapper.containsMatchingElement(<MainButton />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<TextInput />)).toEqual(true);
    })
   
})
*/

/* Waiting for the context to be ready 
describe('MainAuthRouting', () => {
    it('should route to Selector', () => {
        shallow(<MainButton />);

    })
})
*/

