import { Container, Heading, Text, Box } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover": {
      color: "black",
      bg: "blue.400",
    },
  };
  return (
    <Container as="section" maxW={"4xl"} py={"20px"}>
      <Heading my={"30px"} p={"10px"}>
        Dashboard
      </Heading>
      <Text marginLeft={"30px"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, hic.
      </Text>
      <Text ml={"30px"} color={"blue"} fontWeight={"bold"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, hic.
      </Text>
      <Box my={"30px"} p={"20px"} bg={"orange"}>
        <Text color={"white"}>This is a box</Text>
      </Box>
      <Box sx={boxStyles}>Hola!</Box>
    </Container>
  );
}
