import React from "react";
import { useEffect, useState, useCallback } from "react";
import { GridCell } from "./GridCell";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import { debounce } from "lodash";

export type RegionSelectionProps = {
  rows?: number;
  cols?: number;
  onRegionUpdate: Function;
  cellSize?: number;
  bounds?: {
    maxWidthBlock: {
      width: number;
      height: number;
    };
    maxHeightBlock: {
      width: number;
      height: number;
    };
  };
  disabled?: boolean;
  styles?: {
    active?: any;
    hover?: any;
    cell?: any;
    grid?: any;
    disabled?: any;
  };
};

type CoordsType = {
  x: number;
  y: number;
};

const getBaseStyles = (cols, cellSize) => ({
  grid: {
    position: "relative",
    display: "grid",
    color: "#444",
    margin: "25px 0",
    gridGap: "4px 6px",
    gridTemplateColumns: Array(cols).fill(`${cellSize}px`).join(" "),
  },
});

export const GridSelect = ({
  onRegionUpdate,
  rows = 5,
  cols = 5,
  disabled = false,
  cellSize = 25,
  styles,
  bounds,
}: RegionSelectionProps) => {
  const [activeCell, setActiveCell] = useState<CoordsType>({
    x: 0,
    y: 0,
  });
  const [hoverCell, setHoverCell] = useState<CoordsType>(null);
  
  // Whenever the active cell changes, call the user's function with the selected size
  useEffect(() => {
    onRegionUpdate({
      width: activeCell.x + 1,
      height: activeCell.y + 1,
    });
  }, [activeCell]);

  const onClick = ({x, y, isCellDisabled}) => {
    if (isCellDisabled) {return null};
    if (activeCell.x === x && activeCell.y === y) {return null};
    setActiveCell({ x, y });
  };

  // debounce every 5ms so we dont lag with DOM updates
  const onHover = useCallback(
    debounce(({x, y, isCellDisabled}) => {
      if (isCellDisabled) {
        return setHoverCell(null);
      };
      setHoverCell({ x, y });
    }, 5)
  , [disabled]);

  const cells = [];
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      const isActive = x <= activeCell.x && y <= activeCell.y;
      const isHover = hoverCell && x <= hoverCell.x && y <= hoverCell.y;
      // Check to make sure cell is not in the disabled area
      const inBounds =
        bounds && bounds.maxWidthBlock && bounds.maxHeightBlock
          ? (bounds.maxWidthBlock &&
              x <= bounds.maxWidthBlock.width - 1 &&
              y <= bounds.maxWidthBlock.height - 1) ||
            (bounds.maxHeightBlock &&
              x <= bounds.maxHeightBlock.width - 1 &&
              y <= bounds.maxHeightBlock.height - 1)
          : true;
      const isCellDisabled = disabled || !inBounds;
      cells.push(
        <GridCell
          key={x + "-" + y}
          onClick={() => onClick({x, y, isCellDisabled})}
          onMouseEnter={onHover.bind(null, {x, y, isCellDisabled})}   
          active={isActive}
          hover={isHover}
          disabled={isCellDisabled}
          styles={styles}
          cellSize={cellSize}
        />
      );
    }
  }

  const baseStyles = getBaseStyles(cols, cellSize);
  return (
    <div
      style={{
        ...baseStyles.grid,
        ...(styles && styles.grid ? styles.grid : {}),
      }}
      onMouseLeave={() => setHoverCell(null)}
    >
      {cells}
    </div>
  );
};