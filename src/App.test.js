import { render, screen } from '@testing-library/react';
import App from './App';

test('renders unijuazeiro link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Conheça a Unijuazeiro/i);
  expect(linkElement).toBeInTheDocument();
});
