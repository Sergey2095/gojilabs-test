import { Button, Grid, SelectChangeEvent } from "@mui/material";
import { useCallback, useState } from "react";

import Input from "components/Input/Input";
import CustomSelect from "components/Select/Select";
import { EGroceryStatus } from "constants/index";
import { useGroceryContext } from "hooks/useGroceryContext";
import { TGroceryItem } from "types";
import { uuidv4 } from "utils";

const AddGrocery = (): JSX.Element => {
  const initialNewGrocery = {
    id: uuidv4(),
    name: "",
    priority: "1",
    status: EGroceryStatus.RAN_OUT,
    lastModified: new Date(),
  };
  const [newGrocery, setNewGrocery] = useState<TGroceryItem>(initialNewGrocery);
  const { add } = useGroceryContext();
  console.log("render AddGrocery");
  const updateGrocery = (value: string, name: string): void => {
    setNewGrocery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      updateGrocery(value as string, name);
    },
    [],
  );

  const handleSelectChange = useCallback(
    (e: SelectChangeEvent<unknown>): void => {
      const { name, value } = e.target;
      updateGrocery(value as string, name);
    },
    [],
  );

  const addItemClick = (): void => {
    add(newGrocery);
    setNewGrocery({
      ...initialNewGrocery,
      id: uuidv4(),
      lastModified: new Date(),
    });
  };

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={4}>
        <Input
          name="name"
          label="name"
          placeholder="enter grocery name"
          type="text"
          value={newGrocery.name}
          onChange={handleInputChange}
        />
      </Grid>

      <Grid item xs={2}>
        <CustomSelect
          name="status"
          label="Status"
          options={[EGroceryStatus.HAVE, EGroceryStatus.RAN_OUT]}
          value={newGrocery.status}
          onChange={handleSelectChange}
        />
      </Grid>

      <Grid item xs={2}>
        <CustomSelect
          name="priority"
          label="Priority"
          options={["1", "2", "3", "4", "5"]}
          value={newGrocery.priority}
          onChange={handleSelectChange}
        />
      </Grid>

      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={addItemClick}
          disabled={!newGrocery.name}
        >
          Add Item
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddGrocery;
