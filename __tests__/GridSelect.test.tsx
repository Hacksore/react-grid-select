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

test("click last cell & aria-checked updates", async () => {
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

  const lastCell = cells[cells.length - 1];
  // Before clicking the last cell, it should not be checked
  expect(lastCell.getAttribute("aria-checked")).toBe("false");

  fireEvent.click(lastCell);
  // After clicking, the cell should indicate it is active
  expect(lastCell.getAttribute("aria-checked")).toBe("true");
});


test("clicking cell fires correct onRegionUpdate", async () => {
  const onClick = jest.fn();
  const result = render(
    <GridSelect onRegionUpdate={onClick} cols={5} rows={5} />
  );

  const grid = screen.getByRole("grid");
  const cells = within(grid).getAllByRole("gridcell");
  const firstCell = cells[0];
  fireEvent.click(firstCell);

  expect(onClick).toHaveBeenCalledWith({
    width: 1,
    height: 1,
  });

  const lastCell = cells[cells.length - 1];
  fireEvent.click(lastCell);

  expect(onClick).toHaveBeenCalledWith({
    width: 5,
    height: 5,
  });

});
