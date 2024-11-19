import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter.js"

test('renders counter message', () => {
  // Looks for <h2>Counter</h2>
  render(<Counter />);
  const counterLabel = screen.getByText("Counter", {exact: true});
  expect(counterLabel).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const plusBtn = screen.getByText("+");
  fireEvent.click(plusBtn);

  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const minusBtn = screen.getByText("-");
  fireEvent.click(minusBtn);

  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("-1");
});
