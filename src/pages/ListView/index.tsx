import { Box, Typography } from "@mui/material";

import AddGrocery from "./components/AddGrocery";
import GroceryList from "./components/GroceryList";
import styles from "./style/ListView.module.scss";

function ListView(): JSX.Element {
  console.log("render ListView");
  return (
    <Box className={styles.container}>
      <Typography component="h2">Grocery List</Typography>
      <AddGrocery />
      <Box>
        <GroceryList />
      </Box>
    </Box>
  );
}

export default ListView;
