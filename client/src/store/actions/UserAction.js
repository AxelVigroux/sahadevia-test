import { LOAD_USERS } from "./actions-types";
import iaxios from "../../utils/iaxios";

export const getAllUsers = () => {
  return function (dispatch) {
    iaxios
      .get("user/all")
      .then((response) => {
        dispatch({
          type: LOAD_USERS,
          success: response.data.success,
          payload: response.data.users,
        });
      })
      .catch((err) => {
        console.log("ERROR", err);
        dispatch({
          type: LOAD_USERS,
          success: false,
          payload: [],
        });
      });
  };
};
