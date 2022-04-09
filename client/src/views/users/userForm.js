import { useState } from "react";
import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { addNewUser } from "../../requests/user";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  const onSubmitForm = () => {
    let data = {
      firstName: firstName,
      email: email,
    };

    addNewUser(data)
      .then((response) => {
        console.log(response);
        navigate("/userDashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Center h="100%">
      <Stack spacing={4}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitForm();
          }}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} color="white">
                Ajouter un utilisateur
              </Heading>
            </Stack>
            <FormControl id="firstName">
              <FormLabel>Prénom</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={(e) => {
                  setFirstName(e.currentTarget.value);
                }}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </FormControl>
            <Stack spacing={14}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button colorScheme="orange" type="submit" value="Register">
                Envoyer
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
};

export default UserForm;
