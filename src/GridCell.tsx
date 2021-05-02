import React, { CSSProperties } from "react";
import { MouseEventHandler, useEffect, useState } from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";

type CellProperties = {
  active: boolean;
  hover: boolean;
  disabled: boolean;
  cellSize: number;
  onClick: MouseEventHandler<HTMLDivElement>;
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  styles: any;
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
      style={{
        ...cellStyles.cell, 
        ...(active && cellStyles.active),
        ...(hover && cellStyles.hover),
        ...(!active && disabled && cellStyles.disabled),
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    />
  );
};
