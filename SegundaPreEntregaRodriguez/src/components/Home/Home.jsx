import { Flex, Spinner } from "@chakra-ui/react";
import { useProducts } from "../../hooks/useProducts";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Home = () => {
  const { dataProducts, loading } = useProducts();
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <ItemListContainer products={dataProducts}> </ItemListContainer>
      )}
    </>
  );
};
