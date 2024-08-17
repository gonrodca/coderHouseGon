import { Flex, Text } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <Flex>
        <BsCart3></BsCart3>
        <Text>5</Text>
      </Flex>
    </>
  );
};

export default CartWidget;
