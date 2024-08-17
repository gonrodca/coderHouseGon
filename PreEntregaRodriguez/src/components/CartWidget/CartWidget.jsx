import { Flex, Text } from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <BsCart3 color="red" size={"30px"}></BsCart3>
        <Text>5</Text>
      </Flex>
    </>
  );
};

export default CartWidget;
