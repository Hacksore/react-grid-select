import { GridSelect, RegionSelectionProps } from "../GridSelect";
import { Story, Meta } from "@storybook/react";
import React from "react";
import { themes } from "@storybook/theming";
import { action } from "@storybook/addon-actions";

const defaults = {
  styles : {
    gridGap: 4,
    backgroundColor: "#bababa",
    activeColor: "#4d6cdd",
  },
  cellSize: 25,
}

const getStyles = (props) => {
  const { activeColor, backgroundColor, gridGap } = props;
  if (!activeColor || !backgroundColor || !gridGap) return null;
  return ({
    grid: {
      gridGap: `${props.gridGap}px ${props.gridGap + 2}px`,
    },
    cell: {
      background: props.backgroundColor,
      border: `1px solid ${props.backgroundColor}`,
    },
    active: {
      background: props.activeColor,
      border: `1px solid ${props.activeColor}`,
    },
  })
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Region Selection",
  component: GridSelect,
  argTypes: {
    onRegionUpdate: {
      action: "selectedArea",
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      control: "color",
      defaultValue: "#bababa",
    },
    activeColor: {
      control: "color",
      defaultValue: "#4d6cdd",
    },
    gridGap: {
      defaultValue: 4,
      control: {
        type: "range",
      },
    },
    cols: {
      defaultValue: 5,
      control: {
        type: "range",
      },
    },
    rows: {
      defaultValue: 5,
      control: {
        type: "range",
      },
    },
    cellSize: {
      defaultValue: 25,
      control: {
        type: "range",
      },
    },
    styles: {
      defaultValue: getStyles(defaults.styles),
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<RegionSelectionProps> = (args: any) => {
  const { activeColor, backgroundColor, gridGap, ...rest } = args;
  return <GridSelect {...rest} styles={getStyles({ activeColor, backgroundColor, gridGap })} />;
};

export const BasicExample = Template.bind({});
// BasicExample.parameters = { controls: { include: ["cols", "rows", "onRegionUpdate" ] } }

export const BoundsExample = Template.bind({});
BoundsExample.args = {
  rows: 5,
  cols: 5,
  bounds: {
    maxWidthBlock: {
      width: 5,
      height: 2,
    },
    maxHeightBlock: {
      width: 1,
      height: 3,
    },
  },
};

export const LargeGrid = Template.bind({});
LargeGrid.args = {
  onRegionUpdate: action("selectedArea"),
  rows: 25,
  cols: 25,
};
