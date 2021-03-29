/// <reference types="react" />
import "./style.css";
declare type RegionSelectionProperties = {
    rows?: number;
    cols?: number;
    onRegionUpdate: Function;
};
declare const GridSelect: ({ onRegionUpdate, rows, cols, }: RegionSelectionProperties) => JSX.Element;
export { GridSelect };
