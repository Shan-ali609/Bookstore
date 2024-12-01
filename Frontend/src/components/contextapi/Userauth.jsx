

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
