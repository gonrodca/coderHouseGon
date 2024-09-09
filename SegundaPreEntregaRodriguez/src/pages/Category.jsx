import React from "react";
import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useCategoryId } from "../hooks";
import { data } from "framer-motion/client";

export const Category = () => {
  const { id } = useParams();
  const { dataProducts, loading } = useCategoryId({ id });
  console.log(dataProducts);
  return <ItemListContainer products={dataProducts}></ItemListContainer>;
};
