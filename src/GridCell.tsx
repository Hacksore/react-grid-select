import React, { CSSProperties } from "react";
import { MouseEventHandler, useEffect, useState } from "react";

const baseStyle = {
  cell: {
    width: 24,
    height: 24,
    background: "blue",
    cursor: "pointer",
    borderRadius: 3,
  },
  active: {
    background: "green",
  },
  hover: {
    borderColor: "black",
  },
};

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
  const isActive = coords.x <= activeCell.x && coords.y <= activeCell.y;
  const isHover =
    hoverCell && coords.x <= hoverCell.x && coords.y <= hoverCell.y;
  const [styles, setStyles] = useState<any>(baseStyle);
  const [cellClass, setCellClass] = useState<any>();

  useEffect(() => {
    let style = {
      ...baseStyle.cell,
      ...classes?.cell,
    };
    if (isActive) {
      style = {
        ...style,
        ...baseStyle.active,
        ...classes?.active,
      };
    }
    if (isHover) {
      style = {
        ...style,
        ...baseStyle.hover,
        ...classes?.hover,
      };
    }
    setStyles(style);
  }, [isActive, isHover]);

  return <div style={styles} onClick={onClick} onMouseEnter={onMouseEnter} />;
};
