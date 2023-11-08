import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { useGroceryContext } from "hooks/useGroceryContext";
import { displayDate } from "utils";

function EntryView(): JSX.Element {
  const { groceryList } = useGroceryContext();
  const { id } = useParams();

  const groceryItem = useMemo(() => {
    return groceryList.find((item) => item.id === id);
  }, [groceryList, id]);

  if (!groceryItem) {
    return (
      <Box>
        <Typography>Item not found</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ p: 5 }}>
      <Typography component="h1" textAlign="center">
        Entry View
      </Typography>
      <Box>
        <Typography>Name - {groceryItem.name}</Typography>
        <Typography>Status - {groceryItem.status}</Typography>
        <Typography>Priority - {groceryItem.priority}</Typography>
        <Typography>
          Last Modified - {displayDate(groceryItem.lastModified)}
        </Typography>
      </Box>
    </Box>
  );
}

export default EntryView;
