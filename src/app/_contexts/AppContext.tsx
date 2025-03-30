"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  interactionEnabled: boolean;
  setInteractionEnabled: (value: boolean) => void;
}

const defaultContextValue: AppContextType = {
  interactionEnabled: true,
  setInteractionEnabled: () => {},
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [interactionEnabled, setInteractionEnabled] = useState<boolean>(true);

  const value = {
    interactionEnabled,
    setInteractionEnabled,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
