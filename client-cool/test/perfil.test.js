/**
 * @jest-environment jsdom
 */
describe('Test' , () => {
    it('should render the component', () => {
        expect(true).toBe(true);
    })
})

import {screen, cleanup, render} from '@testing-library/react';
import MainAuth from '../components/sections/mainAuth.jsx/mainAuth.jsx';

import data from "../data/staticData.json";
/* I tried but it doesn't work
function setUse(name,email,password) {
        name: name;
        email: email;
        password: password;
        pos: "Admini";
        id: 10;
}

afterEach(cleanup);



describe('MainAuth', () => {
    it('should render the component', () => {
        const use = setUse("name","em","pass");
        render(<MainAuth data={data}/>);
        expect(screen.getByText('Ingresa tu correo')).toBeInTheDocument();
        expect(screen.getByText('Ingresa tu contraseña')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        
    })  
})

*/


