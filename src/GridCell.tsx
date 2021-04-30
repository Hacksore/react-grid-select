import React, { CSSProperties } from "react";
import { MouseEventHandler, useEffect, useState } from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";

// The base cell class is applied to every cell, the other classes are only applied when that condition is active
const useStyles = createUseStyles({
  cell: {
    width: props => props.cellSize,
    height: props => props.cellSize,
    background: "#bababa",
    cursor: "pointer",
    borderRadius: 3,
    border: "1px solid #bababa"
  },
  active: {
    border: "1px solid #4d6cdd",
    background: "#4d6cdd",
  },
  hover: {
    border: "1px solid #fff"
  },
  disabled: {
    filter: "brightness(0.7)",
  },
});

type CellProperties = {
  active: boolean;
  hover: boolean;
  disabled: boolean;
  classes: any;
  cellSize: number;
  onClick: MouseEventHandler<HTMLDivElement>;
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
};

export const GridCell = React.memo(({
  active,
  hover,
  disabled,
  onClick,
  onMouseEnter,
  cellSize,
  classes,
}: CellProperties) => {
  const baseClasses = useStyles({
    cellSize,
  });

  // console.log(`CELL RENDER`);

  return (
    <div
      className={clsx(
        baseClasses.cell, classes?.cell,
        { [baseClasses.active]: active },
        { [classes?.active]: active },
        { [baseClasses.hover]: hover },
        { [classes?.hover]: hover },
        { [baseClasses.disabled]: !active && disabled },
        { [classes?.disabled]: !active && disabled },
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    />
  );
});
