import { render, screen, fireEvent } from '@testing-library/react';
import Counter from "../components/Counter.js"

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Looks for <h2>Counter</h2>
  const counterLabel = screen.getByText("Counter", {exact: true});
  expect(counterLabel).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const plusBtn = screen.getByText("+");
  fireEvent.click(plusBtn);

  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  const minusBtn = screen.getByText("-");
  fireEvent.click(minusBtn);

  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("-1");
});
