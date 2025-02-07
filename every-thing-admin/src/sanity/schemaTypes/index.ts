import { type SchemaTypeDefinition } from 'sanity';
import { orderDetails } from "./Orders";
import { productSchema } from "./Products";
export const schema: { types: SchemaTypeDefinition[]; } = {
	types: [orderDetails, productSchema],
};
