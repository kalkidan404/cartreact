import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";

test("renders home page text", () => {
  render(<Home />);

  expect(screen.getByText(/home/i)).toBeInTheDocument();
});