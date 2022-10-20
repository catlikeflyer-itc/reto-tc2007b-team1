/**
 * @jest-environment jsdom
 */
import {cleanup, render, waitFor, fireEvent,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectorCard from '../testingComp/selectorCard';
import data from "../data/staticData.json";
import React from 'react';

afterEach(cleanup);
describe('Selector', () => {
  const selectors  = data.selector.map((item, index) => (
    <SelectorCard
      key={index}
      data={item}
    />
  ));
    it('should render the component', () => {
      const names = ['Buscar','Subir','Generar expediente','Perfil','Historial','Crear usuario']
        for (let i = 0; i < selectors.length; i++) {
            render(selectors[i]);
            expect(screen.getByText(names[i])).toBeInTheDocument();
        }
      })
})

