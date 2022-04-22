import React from "react";
import { MouseEventHandler } from "react";

type CellProperties = {
  active: boolean;
  hover: boolean;
  disabled: boolean;
  cellSize: number;
  onClick: MouseEventHandler<HTMLDivElement>;
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  styles: any;
  id: string;
};

const getBaseStyles = (cellSize) => ({
  cell: {
    width: cellSize,
    height: cellSize,
    background: "#bababa",
    cursor: "pointer",
    borderRadius: 3,
    border: "1px solid #bababa",
  },
  active: {
    border: "1px solid #4d6cdd",
    background: "#4d6cdd",
  },
  hover: {
    border: "1px solid #fff",
  },
  disabled: {
    filter: "brightness(0.7)",
  },
});

export const GridCell = ({
  active,
  hover,
  disabled,
  onClick,
  onMouseEnter,
  cellSize,
  styles,
  id,
}: CellProperties) => {

  const getMergedStyle = (styleClass) => ({
    ...baseStyles[styleClass],
    ...(styles && styles[styleClass] ? styles[styleClass] : {}),
  });
  
  const baseStyles = getBaseStyles(cellSize);
  const cellStyles = {
    cell: getMergedStyle("cell"),
    active: getMergedStyle("active"),
    hover: getMergedStyle("hover"),
    disabled: getMergedStyle("disabled"),
  };
  
  return (
    <div
      id={id}
      style={{
        ...cellStyles.cell, 
        ...(active && cellStyles.active),
        ...(hover && cellStyles.hover),
        ...(!active && disabled && cellStyles.disabled),
      }}
      role="gridcell"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    />
  );
};
