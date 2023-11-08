import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import Delete from "assets/delete.png";
import { EGroceryStatus } from "constants/index";
import { useGroceryContext } from "hooks/useGroceryContext";
import { TGroceryItem } from "types";
import { displayDate } from "utils";

type GroceryListItemProps = {
  item: TGroceryItem;
};
function GroceryListItem({ item, ...rest }: GroceryListItemProps): JSX.Element {
  const navigate = useNavigate();

  const { remove, update } = useGroceryContext();

  const onItemClick = (): void => {
    navigate(`/item/${item.id}`);
  };

  const onStatusClick = (): void => {
    update({
      ...item,
      status:
        item.status === EGroceryStatus.HAVE
          ? EGroceryStatus.RAN_OUT
          : EGroceryStatus.HAVE,
      lastModified: new Date(),
    });
  };

  const deleteItem = (): void => {
    remove(item.id);
  };

  return (
    <Grid container key={item.id} sx={{ mt: 2 }}>
      <Grid item xs={3}>
        <Typography key={item.id} {...rest} onClick={onItemClick}>
          {item.name}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography key={item.id} {...rest} onClick={onStatusClick}>
          {item.status}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography key={item.id} {...rest} onClick={onItemClick}>
          {item.priority}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography key={item.id} {...rest} onClick={onItemClick}>
          {displayDate(item.lastModified)}
        </Typography>
      </Grid>
      <Grid item xs={2} onClick={deleteItem}>
        <img style={{ width: "20px" }} src={Delete} alt="avocado" />
      </Grid>
    </Grid>
  );
}
export default GroceryListItem;
