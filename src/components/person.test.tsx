import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Person } from './person'

test('renders a name', () => {
  render(<Person name="Jack" />);
  const linkElement = screen.getByText(/Name is Jack/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a name 1', () => {
	render(<Person name="Jack" />);
	const divElement = screen.getByRole("contentinfo");
	expect(divElement).toHaveTextContent("Name is Jack");
	expect(divElement).toHaveAttribute("role", "contentinfo");
  });