//import { logRoles } from '@testing-library/react';
//https://github.com/testing-library/jest-dom

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has a correct init color', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorBtn).toHaveStyle({ background: 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorBtn).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  //check that the btn starts out enabled
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorBtn).toBeEnabled();

  //check that the btn starts out enabled
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button is disabled when checkbox is checked and enabled after unchecked checbox', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});
