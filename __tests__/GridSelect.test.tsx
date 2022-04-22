import React from "react";

import { GridSelect } from "../src/GridSelect";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders without explosions 💥", async () => {
  render(<GridSelect onRegionUpdate={() => {}} />);
});

test("5x5 grid renders", async () => {
  const result = render(
    <GridSelect onRegionUpdate={() => {}} cols={5} rows={5} />
  );

  // test if the last cell is rendered
  const ele = result.container.querySelector("#cell-4-4");
  expect(ele).toBeInTheDocument();
});

test("click last cell & background color updates", async () => {
  const result = render(
    <GridSelect
      onRegionUpdate={() => {}}
      styles={{ active: { background: "#4d6cdd" } }}
      cols={5}
      rows={5}
    />
  );

  const ele = result.container.querySelector("#cell-4-4");

  // click the last cell
  fireEvent.click(ele);

  // ensure that background color matches what was passed in
  expect(ele).toHaveStyle("background: #4d6cdd");
});


test("clicking cell fires correct onRegionUpdate", async () => {
  const onClick = jest.fn();
  const result = render(
    <GridSelect onRegionUpdate={onClick} cols={5} rows={5} />
  );

  const firstCell = result.container.querySelector("#cell-0-0");
  fireEvent.click(firstCell);

  expect(onClick).toHaveBeenCalledWith({
    width: 1,
    height: 1,
  });

  const lastCell = result.container.querySelector("#cell-4-4");
  fireEvent.click(lastCell);

  expect(onClick).toHaveBeenCalledWith({
    width: 5,
    height: 5,
  });

});
