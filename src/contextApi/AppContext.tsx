"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext<{
  isOpenPopupForm: boolean;
  setIsOpenPopupForm: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;

}>({
  isOpenPopupForm: false,
  setIsOpenPopupForm: () => {},
  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},
  selected: "All",
  setSelected: () => {} ,
});

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [selected, setSelected] = useState<string>("All");
  const [isOpenPopupForm, setIsOpenPopupForm] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isOpenPopupForm,
        setIsOpenPopupForm,
        isMobileNavOpen,
        setIsMobileNavOpen,
        selected,
        setSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  if (!AppContext) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return useContext(AppContext);
};
