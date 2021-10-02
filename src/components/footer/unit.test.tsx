import { render, cleanup } from '@testing-library/react';

import Footer from './index';


describe('Footer', () => {
  afterEach(cleanup);


  it('renders without crashing', () => {
    render(
      <Footer />,
    );
  });
});
