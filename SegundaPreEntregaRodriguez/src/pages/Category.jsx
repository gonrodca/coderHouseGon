import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useCategoryId } from "../hooks";
import { Spinner } from "@chakra-ui/react";

export const Category = () => {
  const { id } = useParams();

  const { dataProducts, loading } = useCategoryId({ id });

  console.log({ dataProducts });
  return loading ? (
    <Spinner></Spinner>
  ) : (
    <ItemListContainer products={dataProducts}></ItemListContainer>
  );
};
