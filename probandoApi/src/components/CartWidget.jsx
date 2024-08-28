import { FaCartShopping } from "react-icons/fa6";
import { Text, Flex } from "@chakra-ui/react";
const CartWidget = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <FaCartShopping color={"red"}></FaCartShopping>
        <Text>0</Text>
      </Flex>
    </>
  );
};

export default CartWidget;
