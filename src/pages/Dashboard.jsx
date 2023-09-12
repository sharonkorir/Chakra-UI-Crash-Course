import { SimpleGrid, Box } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid p={"10px"} columns={4} spacing={10} minChildWidth={"250px"}>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>

      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>

      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} h={"200px"} border={"1px solid"}></Box>
    </SimpleGrid>
  );
}
