import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../store/actions/UserAction";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Container,
  Stack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Container h="100%" maxW={"3xl"}>
      <Box>
        <Heading
          fontWeight={600}
          fontSize={58}
          lineHeight="110%"
          color="orange.200"
          textAlign="center"
          mb="10"
          mt="10"
        >
          Test Sahadevia
        </Heading>
        <Stack textAlign="center">
          <Text maxW={"3xl"} mb="14">
            Créer un système de création et de gestion d’utilisateurs (stockage
            JSON côté back)
          </Text>
          <List spacing={3} textAlign="left" mb="14">
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Création d'utilisateur
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Suppression d'utilisateur
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              Liste d'utilisateur
            </ListItem>
          </List>
          <Text mb="0" fontSize={25}>
            Fait par Axel Vigroux
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
