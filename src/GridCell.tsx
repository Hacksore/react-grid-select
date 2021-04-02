import React, { CSSProperties } from "react";
import clsx from "clsx";
import { MouseEventHandler, useEffect, useState } from "react";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cell: {
    width: 24,
    height: 24,
    background: 'blue',
    cursor: 'pointer',
    borderRadius: 3,
		border: "2px solid blue"
  },
  active: {
    background: "green"
  },
  hover: {
    borderColor: "black"
  }
})

type CellProperties = {
  coords: any;
  activeCell: any;
  hoverCell: any;
  onClick: MouseEventHandler<HTMLDivElement>;
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  classes: any;
};

export const GridCell = ({
    coords,
    activeCell,
    onClick,
    hoverCell,
    onMouseEnter,
    classes,
  }: CellProperties) => {
    const baseClasses = useStyles();
    const isActive = coords.x <= activeCell.x && coords.y <= activeCell.y;
    const isHover = hoverCell && coords.x <= hoverCell.x && coords.y <= hoverCell.y;

    return (
      <div
        className={clsx(baseClasses.cell, {
					[classes.cell]: classes && classes.cell,
          [baseClasses.active]: isActive,
					[classes.active]: isActive && classes && classes.active,
          [baseClasses.hover]: isHover,
					[classes.hover]: isHover && classes && classes.hover,
					// [classes.activeCell]: class.activeCell,
        })}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      />
    );
  };