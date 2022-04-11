import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Center } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/table";
import { CloseIcon } from "@chakra-ui/icons";
import { getAllUsers } from "../../store/actions/UserAction";
import iaxios from "../../utils/iaxios";

const Dashboard = (props) => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setUsers(dispatch(getAllUsers()));
  }, [users]);

  const deleteUser = (id) => {
    iaxios.delete("user/delete/" + id).then((response) => {
      console.log(response);
      if (response.status === 200) {
        getAllUsers(props.users.users);
        setUsers(props.users.users);
      }
    });
  };

  return (
    <Center height="100%">
      <TableContainer>
        <Table
          mt={25}
          minW="300px"
          maxW="560px"
          size="md"
          variant="striped"
          colorScheme="whiteAlpha"
          justifyContent="center"
          alignItems="center"
        >
          <TableCaption fontSize="2xl" pb={8} placement="top" color="white">
            Gestion d'utilisateur
          </TableCaption>
          <Thead>
            <Tr>
              <Th color="whiteAlpha">Prénom</Th>
              <Th color="whiteAlpha" pl={14}>
                Email
              </Th>
              <Th color="whiteAlpha">Supprimer</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.users.users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.firstName}</Td>
                <Td>{user.email}</Td>
                <Td pl={12}>
                  <button
                    onClick={(e) => {
                      deleteUser(user.id);
                    }}
                  >
                    <CloseIcon color="red.500" />
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
};

const mapStateToProps = (store) => {
  return {
    users: store.users,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
