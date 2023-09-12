import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as={"nav"} p={"10px"} alignItems="center">
      <Heading as={"h1"}>Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg={"gray.200"} p={"10px"}>
          M
        </Box>
        <Text>sharon@thecodingninja.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg={"gray.200"} justify={"space-around"} wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue" flexGrow={"1"}>
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="green" flexGrow={"2"}>
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     4
    //   </Box>
    // </Flex>
  );
}
