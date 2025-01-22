import { type SchemaTypeDefinition } from 'sanity';
import {productSchema} from './products';
import {orderDetails} from './orderDetails';
export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [productSchema, orderDetails],
};