import { render, cleanup } from '@testing-library/react';

import ListedFile from './index';


describe('ListedFile', () => {
  afterEach(cleanup);


  it('renders without crashing', () => {
    render(
      <ListedFile
        fileName={'foo'}
        fileSize={123}
        handleClick={jest.fn()}
      />,
    );
  });
});
