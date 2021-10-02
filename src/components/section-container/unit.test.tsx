import { render, cleanup } from '@testing-library/react';

import SectionContainer from './index';


describe('SectionContainer', () => {
  afterEach(cleanup);


  it('renders without crashing', () => {
    render(
      <SectionContainer>
        <p>Foobar</p>
        <p>Barbaz</p>
      </SectionContainer>,
    );
  });
});
