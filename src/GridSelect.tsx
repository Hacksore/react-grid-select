import React from "react";
import clsx from "clsx";
import { MouseEventHandler, useEffect, useState } from "react";
import "./style.css";

type CellProperties = {
  coords: any;
  activeCell: any;
  hoverCell: any;
  onClick: MouseEventHandler<HTMLDivElement>;
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
};

const Cell = ({
  coords,
  activeCell,
  onClick,
  hoverCell,
  onMouseEnter,
}: CellProperties) => {
  const isActive = () => {
    if (coords.x <= activeCell.x && coords.y <= activeCell.y) {
      return true;
    }

    return false;
  };

  const isHover = () => {
    if (hoverCell && coords.x <= hoverCell.x && coords.y <= hoverCell.y) {
      return true;
    }

    return false;
  };

  return (
    <div
      className={clsx("cell", {
        active: isActive(),
        hoverCell: isHover(),
      })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    />
  );
};

type RegionSelectionProperties = {
  rows?: number;
  cols?: number;
  onRegionUpdate: Function;
};

const GridSelect = ({
  onRegionUpdate,
  rows = 1,
  cols = 1,
}: RegionSelectionProperties) => {
  const [activeCell, setActiveCell] = useState<any>({
    x: 0,
    y: 0,
  });
  const [hoverCell, setHoverCell] = useState<any>(null);

  useEffect(() => {
    onRegionUpdate({
      width: activeCell.x,
      height: activeCell.y,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCell]);

  // grid setting
  const gridCss = {
    gridTemplateColumns: Array(cols).fill("24px").join(" "),
    gridGap: 5,
  }

  return (
    <>
      <div className="wrapper" style={gridCss} onMouseLeave={() => setHoverCell(null)}>
        {Array(cols*rows)
          .fill(0)
          .map((item, index) => {
            const coords = {
              x: index % rows,
              y: Math.floor(index / rows),
            };
            return (
              <Cell
                coords={coords}
                key={index}
                onClick={() => setActiveCell(coords)}
                onMouseEnter={() => setHoverCell(coords)}
                activeCell={activeCell}
                hoverCell={hoverCell}
              />
            );
          })}
      </div>
    </>
  );
};

export { GridSelect };
