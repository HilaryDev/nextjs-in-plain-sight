import { screen, render, cleanup } from '@testing-library/react';

import SubmitButton from './index';
import {PossibleActionsToPerform} from '../../types';


describe('SubmitButton', () => {
  afterEach(cleanup);


  describe('if the submit button is in the form for hiding files', () => {
    it("renders the text 'Hiding files...' if it's currently in the process of hiding files", () => {
      render(
        <SubmitButton
          action={PossibleActionsToPerform.HIDE}
          onClick={jest.fn()}
          inProgress={true}
          progress={50}
        />
      )
      const button = screen.getByRole('button');


      expect(button).toHaveTextContent('Hiding files...')
    })


    it("renders the text 'Hide files' if it's not currently in the process of hiding files", () => {
      render(
        <SubmitButton
          action={PossibleActionsToPerform.HIDE}
          onClick={jest.fn()}
          inProgress={false}
          progress={0}
        />
      )
      const button = screen.getByRole('button');


      expect(button).toHaveTextContent(/^Hide files$/)
    })
  })

  describe('if the submit button is in the form for retrieving files', () => {
    it("renders the text 'Retrieving files...' if it's currently in the process of hiding files", () => {
      render(
        <SubmitButton
          action={PossibleActionsToPerform.RETRIEVE}
          onClick={jest.fn()}
          inProgress={true}
          progress={50}
        />
      )
      const button = screen.getByRole('button');


      expect(button).toHaveTextContent('Retrieving files...')
    })


    it("renders the text 'Hide files' if it's not currently in the process of hiding files", () => {
      render(
        <SubmitButton
          action={PossibleActionsToPerform.RETRIEVE}
          onClick={jest.fn()}
          inProgress={false}
          progress={0}
        />
      )
      const button = screen.getByRole('button');


      expect(button).toHaveTextContent(/^Retrieve files$/)
    })
  })
});
