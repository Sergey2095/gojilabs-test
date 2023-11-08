import { createContext } from "react";

import { TGroceryItem } from "../types";

export type GroceryContextType = {
  groceryList: TGroceryItem[];
  add: (grocery: TGroceryItem) => void;
  remove: (id: string) => void;
  update: (updatedGrocery: TGroceryItem) => void;
};

export const GroceryContext = createContext<null | GroceryContextType>(null);
