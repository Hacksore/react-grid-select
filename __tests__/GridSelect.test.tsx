import React from "react";

import { GridSelect } from "../src/GridSelect";
import { render } from "@testing-library/react";

test("Renders without explosions", async () => {
  render(<GridSelect onRegionUpdate={() => {}} />);
});
