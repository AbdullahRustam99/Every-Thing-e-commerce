export const orderDetails = {
  name: "orderDetails",
  title: "Order Deatils",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "address1",
      title: "Address 1",
      type: "string",
    },
    {
      name: "address2",
      title: "Address 2",
      type: "string",
    },
    {
      name: "postalcode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "locality",
      title: "Locality",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "cart",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "productId",
              title: "Product ID",
              type: "string",
            },
            {
              name: "productName",
              title: "Product Name",
              type: "string",
            },
            {
              name: "productQuantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "sum",
      title: "Total Price",
      type: "number",
    },
  ],
};
