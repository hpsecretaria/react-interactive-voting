import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders online voting page", () => {
  render(<App />);
  const linkElement = screen.getByText("Online Votes");
  expect(linkElement).toBeInTheDocument();
});
