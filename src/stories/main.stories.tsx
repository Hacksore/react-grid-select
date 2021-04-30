import { GridSelect, RegionSelectionProps } from "../GridSelect";
import { createUseStyles } from 'react-jss';
import { Story, Meta } from '@storybook/react';
import React from "react";
import { themes } from '@storybook/theming';
import { useEffect, useState } from "@storybook/client-api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Region Selection",
  docs: {
    theme: themes.dark,
  },
  argTypes: {
    onRegionUpdate: {
      table: {
        disable: true
      }
    },
    backgroundColor: {
      control: "color",
    },
    activeColor: {
      control: "color",
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

const useStyles = createUseStyles({
  grid: {    
    gridGap: (props: any) => `${props.gridGap}px ${props.gridGap + 2}px`
  },
  cell: {
    background: (props: any) => props.backgroundColor,
  },
});

const Template: Story<RegionSelectionProps> = (args: any) => {
  const classes = useStyles({
    backgroundColor: args.backgroundColor,
    activeColor: args.activeColor,
    gridGap: args.gridGap,
  });

  return (
  
    <GridSelect 
      classes={classes} 
      cellSize={args.cellSize}
      {...args} 
    />
  
  )
};

export const Example = Template.bind({});
Example.args = {
  onRegionUpdate: (bounds) => {},
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
