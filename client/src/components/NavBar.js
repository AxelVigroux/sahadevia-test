import { Link as RRLink } from "react-router-dom";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";

const NavLink = ({ children, to, fontSize, color }) => (
  <Link
    as={RRLink}
    to={to}
    px={2}
    py={1}
    rounded={"md"}
    fontSize={fontSize}
    color={color}
  >
    {children}
  </Link>
);

const Navbar = (props) => {
  return (
    <Box px={4}>
      <Flex postition="fixed" w="100%" h={16} alignItems="center">
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <NavLink color="orange.300" fontSize="2xl" to="/">
              Accueil
            </NavLink>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink color="white" to="/userForm">
              Ajouter un utilisateur
            </NavLink>
            <NavLink color="white" to="/userDashboard">
              DashBoard
            </NavLink>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;

{
}
