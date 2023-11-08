import { EGroceryStatus } from "constants/index";

export type TGroceryItem = {
  id: string;
  name: string;
  status: EGroceryStatus.RAN_OUT | EGroceryStatus.HAVE;
  priority: string;
  lastModified: Date;
};
