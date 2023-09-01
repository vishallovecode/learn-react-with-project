import { UPDATE_LIST_DATA } from "./types";
export const updateListData = (data)=>{
  return {
      type: UPDATE_LIST_DATA,
      payload: data,
  };
}
 