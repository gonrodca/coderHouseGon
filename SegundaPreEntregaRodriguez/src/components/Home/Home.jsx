import { Flex } from "@chakra-ui/react";
import { useProducts } from "../../hooks/useProducts";

export const Home = () => {
  const { dataProducts, loading } = useProducts();
  console.log(dataProducts);
  return <></>;
};
