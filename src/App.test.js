import { render, screen } from '@testing-library/react';
import App from './App';
import { test } from '@testing-library/react';
import { expect } from '@jest/globals';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
