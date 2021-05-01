import { GridSelect, RegionSelectionProps } from "../GridSelect";
import { Story, Meta } from '@storybook/react';
import React from "react";
import { themes } from '@storybook/theming';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Region Selection",
  docs: {
    theme: themes.dark,
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
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
      }
    },
    cols: {
      defaultValue: 5,
      control: {
        type: "range",
      }
    },
    rows: {
      defaultValue: 5,
      control: {
        type: "range",
      }
    },
    cellSize: {
      defaultValue: 25,
      control: {
        type: "range",
      }
    },
  }
} as Meta;

const getStyles = (props) => ({
  grid: {    
    gridGap: `${props.gridGap}px ${props.gridGap + 2}px`
  },
  cell: {
    background: props.backgroundColor,
    border: `1px solid ${props.backgroundColor}`,
  },
  active: {
    background: props.activeColor,
    border: `1px solid ${props.activeColor}`,
  },
});

const Template: Story<RegionSelectionProps> = (args: any) => {
  return (
    <GridSelect 
      styles={getStyles(args)}
      cellSize={args.cellSize}
      {...args} 
    />
  
  )
};

export const Example = Template.bind({});
Example.args = {
  onRegionUpdate: (bounds) => {action("yooo")},
  rows: 5,
  cols: 5,
  cellSize: 25,
  disabled: false
}

export const LargeGrid = Template.bind({});
LargeGrid.args = {
  onRegionUpdate: (bounds) => {},
  rows: 25,
  cols: 25,
  disabled: false
}
