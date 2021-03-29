import { GridSelect } from "../GridSelect";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example",
};

export const RegionSelectionExample = (args) => {
  return (
    <>
      <GridSelect onRegionUpdate={(bounds) => console.log(bounds)} />

      <GridSelect
        onRegionUpdate={(bounds) => console.log(bounds)}
        rows={5}
        cols={5}
      />
      <GridSelect
        onRegionUpdate={(bounds) => console.log(bounds)}
        rows={10}
        cols={10}
      />
    </>
  );
};
