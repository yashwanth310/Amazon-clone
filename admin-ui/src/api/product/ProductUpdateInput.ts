import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountprice?: number;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string;
  titleprice?: InputJsonValue;
  variants?: InputJsonValue;
};
