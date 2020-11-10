import { createContext, useContext, useReducer } from "react";

export const DataLayerPlanner = createContext();

export const DataLayer = ({ initialSata, reducer, children }) => (
  <DataLayerPlanner.Provider value={useReducer(reducer, initialSata)}>
    {children}
  </DataLayerPlanner.Provider>
);

export const DataLayerPlannerValue = () => useContext(DataLayerPlanner);
