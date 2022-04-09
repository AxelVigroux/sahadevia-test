import iaxios from "../utils/iaxios";

export const addNewUser = (data) => {
  return iaxios
    .post("/user/add", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};
