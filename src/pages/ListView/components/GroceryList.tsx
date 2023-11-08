import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

import CustomSelect from "components/Select/Select";
import { useGroceryContext } from "hooks/useGroceryContext";
// import { TGroceryItem } from "types";

import GroceryListItem from "./GroceryListItem";

// type TGroceryListProps = {
//   groceryList: TGroceryItem[];
// };

type TFilterOptions = "have" | "ran out" | "all";

function GroceryList(): JSX.Element {
  const { groceryList } = useGroceryContext();
  console.log("render GroceryList");
  const defaultSortingCriteria = "priority";
  const [statusFilter, setStatusFilter] = useState<TFilterOptions>("all");

  const sortedGroceryList = [...groceryList]
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .sort((a, b) => {
      if (a[defaultSortingCriteria] === b[defaultSortingCriteria]) {
        // If the sorting criteria is the same, sort by name (alphabetically)
        return a.name.localeCompare(b.name);
      }
      const order = 1;
      const aValue = parseInt(a[defaultSortingCriteria]);
      const bValue = parseInt(b[defaultSortingCriteria]);
      return (aValue - bValue) * order;
    });

  const handleFilterChange = (e: SelectChangeEvent<unknown>): void => {
    const { value } = e.target;
    setStatusFilter(value as TFilterOptions);
  };

  return (
    <>
      <Box sx={{ width: 100 }}>
        <CustomSelect
          label="Filtering"
          options={["have", "ran out", "all"]}
          value={statusFilter}
          onChange={handleFilterChange}
        />
      </Box>
      <Box>
        {sortedGroceryList.map((item) => (
          <GroceryListItem item={item} key={item.id} />
        ))}
      </Box>
    </>
  );
}

export default GroceryList;
