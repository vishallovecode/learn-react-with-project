import { UPDATE_LIST_DATA } from "../actions/types";

const initialState = {
  porductList: [],
  userInfo: {},
};
const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST_DATA:
      return {
        ...state,
        porductList: action.payload,
      };
    default:
      return state;
  }
};

export default productListReducer;
