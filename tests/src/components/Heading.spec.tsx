import Heading from "../../../src/components/Heading";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Heading", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    );
    expect(screen.getByText("Add Project")).toBeInTheDocument();
  });



  test('renders with Add Product with route: "/add-product', () => {
    render(
      <MemoryRouter initialEntries={["/add-project"]}>
        <Heading />
      </MemoryRouter>
    );
    expect(screen.getByText("Add Project")).toBeInTheDocument();
  });

  test('renders with My Projects with route: "/', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Heading />
      </MemoryRouter>
    );
    expect(screen.getByText("My projects")).toBeInTheDocument();
  });

});
