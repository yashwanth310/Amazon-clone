import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountprice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  orderId?: SortOrder;
  title?: SortOrder;
  titleprice?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
