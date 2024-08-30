import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface GlobalContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Create a provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>("light");

  return (
    <GlobalContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
