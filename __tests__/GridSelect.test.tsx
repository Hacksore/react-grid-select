import React from "react";

import { GridSelect } from "../src/GridSelect";
import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders without explosions 💥", async () => {
  render(<GridSelect onRegionUpdate={() => {}} />);
});

test("5x5 grid renders", async () => {
  render(
    <GridSelect onRegionUpdate={() => {}} cols={5} rows={5} />
  );

  const grid = screen.getByRole("grid");
  const cells = within(grid).getAllByRole("gridcell");
  expect(cells.length).toBe(25);
});

test("click last cell & background color updates", async () => {
  render(
    <GridSelect
      onRegionUpdate={() => {}}
      styles={{ active: { background: "#4d6cdd" } }}
      cols={5}
      rows={5}
    />
  );

  const grid = screen.getByRole("grid");
  const cells = within(grid).getAllByRole("gridcell");
  expect(cells.length).toBe(25);

  const lastCell = cells[cells.length - 1];
  // click the last cell
  fireEvent.click(lastCell);
  // ensure that background color matches what was passed in
  expect(lastCell).toHaveStyle("background: #4d6cdd");
});
