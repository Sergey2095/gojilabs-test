import "./App.css";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";

import useLocalStorage from "hooks/useLocalStorage";

import { GroceryContext } from "./context";
import { router } from "./router";
import { TGroceryItem } from "./types";

function App(): JSX.Element {
  const [groceryListStorage] = useLocalStorage("groceryList", []);

  const [groceryList, setGroceryList] = useState<TGroceryItem[]>(
    groceryListStorage as TGroceryItem[],
  );

  // useEffect(() => {
  //   setGroceryListStorage(groceryList);
  // }, [groceryList, setGroceryListStorage]);

  const handleAddItem = (item: TGroceryItem): void => {
    setGroceryList((prevList) => [...prevList, item]);
  };

  const handleRemoveItem = (id: string): void => {
    setGroceryList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (updatedItem: TGroceryItem): void => {
    setGroceryList((prevList) =>
      prevList.map((item) => {
        if (item.id === updatedItem.id) {
          return {
            ...item,
            ...updatedItem,
          };
        }
        return item;
      }),
    );
  };

  return (
    <GroceryContext.Provider
      value={{
        groceryList,
        add: handleAddItem,
        remove: handleRemoveItem,
        update: handleUpdateItem,
      }}
    >
      <RouterProvider router={router} />
    </GroceryContext.Provider>
  );
}

export default App;
