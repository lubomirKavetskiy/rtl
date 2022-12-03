//import { logRoles } from '@testing-library/react';
//https://github.com/testing-library/jest-dom

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace, colors } from './App';

test('button has a correct init color', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorBtn).toHaveStyle({ background: colors.init });

  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({ backgroundColor: colors.changed });
  expect(colorBtn).toHaveTextContent('Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  //check that the btn starts out enabled
  const colorBtn = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  expect(colorBtn).toBeEnabled();

  //check that the btn starts out enabled
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button is disabled when checkbox is checked and enabled after unchecked checbox', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable btn' });

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});

test('clicked disabled btn has gray bg-color and reverts to  blue', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable btn' });

  fireEvent.click(colorBtn);

  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: colors.disabled });

  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: colors.changed });
});

describe('spaces before came-case capital letter', () => {
  test('works for inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red');
  });

  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpace('MiddleVioletRed')).toBe('Middle Violet Red');
  });
});
