import React from "react";
import { useEffect, useState } from "react";
import { GridCell } from "./GridCell";
import { createUseStyles } from 'react-jss';

type RegionSelectionProperties = {
  rows?: number;
  cols?: number;
  gridGap?: number;
  onRegionUpdate: Function;
  classes?: {
    active?: any;
    hover?: any;
    cell?: any;
    grid?: any;
  };
};

const useStyles = createUseStyles({
  grid: {
    position: 'relative',
    display: 'grid',
    color: '#444',
    margin: '24px 0 24px 0',
  }
})

const GridSelect = ({
  onRegionUpdate,
  rows = 1,
  cols = 1,
  gridGap = 5,
  classes,
}: RegionSelectionProperties) => {
  const baseClasses = useStyles();

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
  }, [activeCell]);

  // grid setting
  const gridCss = {
    gridTemplateColumns: Array(cols).fill("24px").join(" "),
    gridGap: gridGap,
  }

  return (
    <>
      <div className={baseClasses.grid} style={gridCss} onMouseLeave={() => setHoverCell(null)}>
        {Array(cols*rows)
          .fill(0)
          .map((item, index) => {
            const coords = {
              x: index % rows,
              y: Math.floor(index / rows),
            };
            return (
              <GridCell
                coords={coords}
                key={index}
                onClick={() => setActiveCell(coords)}
                onMouseEnter={() => setHoverCell(coords)}
                activeCell={activeCell}
                hoverCell={hoverCell}
                classes={classes}
              />
            );
          })}
      </div>
    </>
  );
};

export { GridSelect };
