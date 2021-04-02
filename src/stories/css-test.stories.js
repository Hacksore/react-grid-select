import { GridSelect } from "../GridSelect";
import { createUseStyles } from 'react-jss';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "CSS Test",
};

const useStyles = createUseStyles({
  active: {
    background: "green !important"
  },
  hover: {
    border: "2px solid red",
  },
  cell: {
    background: "pink",
  },
  grid: {
    background: "red",
  },
})

export const RegionSelectionExample = (args) => {
  const classes = useStyles();
  return (
    <>
   
      <GridSelect
        onRegionUpdate={(bounds) => console.log(bounds)}
        rows={30}
        cols={30}
        classes={{
          active: classes.active,
          hover: classes.hover,
          cell: classes.cell,
        }}
      />
    </>
  );
};
