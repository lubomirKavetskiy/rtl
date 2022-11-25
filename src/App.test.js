import { render, screen, fireEvent } from '@testing-library/react';
//import { logRoles } from '@testing-library/react';

import App from './App';

test('button has a correct init color', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorBtn).toHaveStyle({ background: 'red' });
});

test('button has a correct init text', () => {
  render(<App />);
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorBtn).toHaveTextContent('Change to red');
});
