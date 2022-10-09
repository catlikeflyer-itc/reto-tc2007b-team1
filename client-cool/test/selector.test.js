/**
 * @jest-environment jsdom
 */
import {cleanup, render, waitFor, fireEvent,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectorCard from '../components/cards/selectorCard.jsx/selectorCard';
import Selector from '../components/sections/selector/selector';
import data from "../data/staticData.json";


afterEach(cleanup);
describe('Selector', () => {
  const selectors  = data.selector.map((item, index) => (
    <SelectorCard
      key={index}
      data={item}
    />
  ));
    it('should render the component', () => {
        render(<Selector data={data.selector} />);
        for (let i = 0; i < selectors.length; i++) {
            waitFor(() => expect(selectors[i]).toBeInTheDocument());
        }
      })
      it('should link to /buscar', () => {
        render(<Selector data={data.selector} />);
        fireEvent.click(screen.getByText('Buscar'));
        waitFor(() => expect(window.location.pathname).toContain('/buscar'));
      })
})

