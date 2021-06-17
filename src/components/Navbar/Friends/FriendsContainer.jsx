import React from "react";
import Friends from "./Friends"
import StoreContext from "../../../storeContext";

const FriendsContainer = (props) => {
  return <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().sidebar;

        return <Friends sidebar={state}/>;
      }}
    </StoreContext.Consumer>
}

export default FriendsContainer;
