import type { MutableRefObject } from 'react';
import { render, cleanup } from '@testing-library/react';

import FileInput from './index';


describe('FileInput', () => {
  afterEach(cleanup);


  it('renders without crashing', () => {
    render(
      <FileInput
        accept={undefined}
        fileInputRef={undefined as unknown as MutableRefObject<HTMLInputElement | null>}
        handleChange={jest.fn()}
        isLoading={false}
        hasThereBeenAnError={false}
        enteringMultipleFiles={false}
        type={'image'}
      />,
    );
  });
});
