// import React, { useContext, useState } from 'react'
       

//     const Authcontext =  useContext();
// export default function Userauth({}) {
//    const initialuser = localStorage.getItem("users");
//    const [authUser , setauthUser] = useState(
//     initialuser ? JSON.parse(initialuser) : undefined
//    )
//    return(
//     <Authcontext.Provider value = {[authUser , setauthUser]} >{children}</Authcontext.Provider>
//    )
// }
// export const useauth = useContext(Authcontext);

import React, { createContext, useContext, useState } from 'react';

// Create the Authcontext
const Authcontext = createContext();

// Provider Component
export default function Userauth({ children }) {
  const initialUser = localStorage.getItem("users");
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );

  return (
    <Authcontext.Provider value={[authUser, setAuthUser]}>
      {children}
    </Authcontext.Provider>
  );
}

// Custom Hook to use Authcontext
export const useAuth = () => {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
