import React from "react";
import { UserConsumer } from "./userContext";

export const C = () => {
  return (
    <div>
      C
      <UserConsumer>
        {(userName) => {
          return <h4> Hello {userName.firstName}</h4>;
        }}
      </UserConsumer>
    </div>
  );
};
