import { render, cleanup } from '@testing-library/react';

import PasswordInputContainer from './index';


describe('PasswordInputContainer', () => {
  afterEach(cleanup);


  it('renders without crashing', () => {
    render(
      <PasswordInputContainer
        htmlFor="Foobar"
      >
        <span>Bar</span>
        <span>Baz</span>
      </PasswordInputContainer>,
    );
  });
});
