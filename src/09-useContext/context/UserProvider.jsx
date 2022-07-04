import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    // const user={
    //     id:123,
    //     name: 'Carlos',
    //     email:'email@example.com',
    // }

  return (
    // <UserContext.Provider value={{hola:'Mundo',user:user}}>
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  );
};
