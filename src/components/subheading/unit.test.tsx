import { render, cleanup } from '@testing-library/react';

import Subheading from './index';


describe('Subheading', () => {
  afterEach(cleanup);


  it('renders without crashing', () => {
    render(
      <Subheading>
        Foobar
      </Subheading>,
    );
  });
});
