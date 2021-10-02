import { cleanup, render, screen } from '@testing-library/react';

import PasswordInputs from './index';
import { PossibleActionsToPerform } from '../../types';


describe('PasswordInputs', () => {
  afterEach(cleanup);


  it('renders without crashing', () => {
    render(
      <PasswordInputs
        action={PossibleActionsToPerform.HIDE}
        password=""
        confirmedPassword=""
        handlePasswordChange={jest.fn()}
        handleConfirmedPasswordChange={jest.fn()}
      />
    );
  });


  test('when the password field has at least one character in it,'
    + ' the "Confirm password" input appears',
    () => {
      render(
        <PasswordInputs
          action={PossibleActionsToPerform.HIDE}
          password="1"
          confirmedPassword=""
          handlePasswordChange={jest.fn()}
          handleConfirmedPasswordChange={jest.fn()}
        />
      );


      expect(
        screen.getByText(/^Confirm password:$/)
      ).toBeInTheDocument();
    });


  test('when the password field is empty (ignoring whitespaces),'
    + ' the "Confirm password" input is hidden',
    () => {
      render(
        <PasswordInputs
          action={PossibleActionsToPerform.HIDE}
          password="               "
          confirmedPassword=""
          handlePasswordChange={jest.fn()}
          handleConfirmedPasswordChange={jest.fn()}
        />
      );


      expect(
        screen.queryByText(/^Confirm password:$/)
      ).not.toBeInTheDocument();
    });


  describe('when both the password field and the confirmed password fields have at least'
  + ' one character in them (ignoring whitespace), and the strings in both fields', () => {
    test("don't match, an error message appears", () => {
      render(
        <PasswordInputs
          action={PossibleActionsToPerform.HIDE}
          password="foo"
          confirmedPassword="bar"
          handlePasswordChange={jest.fn()}
          handleConfirmedPasswordChange={jest.fn()}
        />
      );


      expect(
        screen.getByText(/^The passwords don't match.$/)
      ).toBeInTheDocument();
    })


    test("match, the error message remains hidden", () => {
      render(
        <PasswordInputs
          action={PossibleActionsToPerform.HIDE}
          password="123"
          confirmedPassword="123"
          handlePasswordChange={jest.fn()}
          handleConfirmedPasswordChange={jest.fn()}
        />
      );


      expect(
        screen.queryByText(/^The passwords don't match.$/)
      ).not.toBeInTheDocument();
    })
  })
});
