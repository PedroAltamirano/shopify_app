import { useState } from "react";
import {
  Card,
  Button,
  Heading,
  TextContainer,
  DataTable,
} from "@shopify/polaris";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import ModalExample from "./ModalExample";

const PRODUCTS_QUERY = gql`
  {
    products(first: 10, reverse: true) {
      edges {
        node {
          id
          createdAt
          publishedAt
          title
          status
          vendor
          description
          productType
          tags
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const { loading, error, data, refetch } = useQuery(PRODUCTS_QUERY);

  useEffect(() => {
    if (data) {
      const prods = data.products.edges.map(({ node }) => {
        const price = `${node.priceRangeV2.minVariantPrice.amount} - ${node.priceRangeV2.maxVariantPrice.amount}`;
        return [
          node.id,
          node.title,
          node.description,
          price,
          node.status,
          node.createdAt,
          node.publishedAt,
        ];
      });
      setProducts(prods);
      console.log(
        "🚀 ~ file: Products.jsx ~ line 34 ~ useEffect ~ prods",
        data
      );
    }
  }, [data]);

  return (
    <Card title="Product List" sectioned>
      {error && (
        <Heading element="h4" style={{ color: "red" }}>
          Error :(
        </Heading>
      )}
      <DataTable
        columnContentTypes={[
          "text",
          "text",
          "text",
          "text",
          "text",
          "text",
          "text",
        ]}
        headings={[
          "Id",
          "Product",
          "Description",
          "Price",
          "Status",
          "Created",
          "Published",
        ]}
        rows={products}
      />
      <Button
        loading={loading}
        onClick={() => {
          console.log("refetching...");
          refetch();
        }}
      >
        Refetch product list
      </Button>

      <ModalExample />
    </Card>
  );
};

export default Products;
