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

export const GridCell = ({
  active,
  hover,
  disabled,
  onClick,
  onMouseEnter,
  cellSize,
  styles,
}: CellProperties) => {

  // Merge in custom styles
  const baseStyles = {
    cell: {
      width: cellSize,
      height: cellSize,
      background: "#bababa",
      cursor: "pointer",
      borderRadius: 3,
      border: "1px solid #bababa",
      ...styles.cell,
    },
    active: {
      border: "1px solid #4d6cdd",
      background: "#4d6cdd",
      ...styles.active,
    },
    hover: {
      border: "1px solid #fff",
      ...styles.hover,
    },
    disabled: {
      filter: "brightness(0.7)",
      ...styles.disabled,
    },
  };
  
  return (
    <div
      style={{
        ...baseStyles.cell, 
        ...(active && baseStyles.active),
        ...(hover && baseStyles.hover),
        ...(!active && disabled && baseStyles.disabled),
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    />
  );
};
