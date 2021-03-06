import { LOAD_USERS } from "../actions/actions-types";

const initialState = {
  users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
