import React from "react";
//when we define initial  value we dont need any provider

const initialvalue = { firstName: "Shoyab", lastName: "Idrisi" };
const userContext = React.createContext(initialvalue);
const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;
export { UserConsumer, UserProvider };
