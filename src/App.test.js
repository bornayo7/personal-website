import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./components/Footer";

test("footer renders name and GitHub link", () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  expect(screen.getAllByText(/Yash Baruah/i).length).toBeGreaterThan(0);
  expect(screen.getByLabelText(/GitHub/i)).toHaveAttribute(
    "href",
    "https://github.com/bornayo7"
  );
});
