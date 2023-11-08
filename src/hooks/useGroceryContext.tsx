import { useContext } from "react";

import { GroceryContext, GroceryContextType } from "../context";

export const useGroceryContext = (): GroceryContextType => {
  const context = useContext(GroceryContext);
  return context as GroceryContextType;
};
