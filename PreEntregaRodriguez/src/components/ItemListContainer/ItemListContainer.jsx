import { Flex, Text } from "@chakra-ui/react/";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Text>{greeting}</Text>
      </Flex>
    </>
  );
};

export default ItemListContainer;
