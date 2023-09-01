import React, { useContext, useEffect } from "react";

import { StoreContext } from "../store";
const Parent2 = (props) => {
  const { state } = useContext(StoreContext);
  // this is behaving like the consumer accessing the context
  useEffect(() => {
    console.log(state, "checki state");
  }, [state]);
  return (
    <div>
      {state?.generalStates?.userInfo?.token
        ? "SuccessFully Login"
        : "Please Login"}
    </div>
  );
};

export default Parent2;
