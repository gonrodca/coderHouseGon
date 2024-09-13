import React from "react";
import { ItemListContainer } from "../components";
import { useProducts } from "../hooks/useProducts";
import { Spinner } from "@chakra-ui/react";

export const Home = () => {
  const { dataProducts, loading } = useProducts();
  return loading ? (
    <Spinner></Spinner>
  ) : (
    <ItemListContainer products={dataProducts}>Home</ItemListContainer>
  );
};
