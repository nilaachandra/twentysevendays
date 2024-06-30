"use client";

import { ReactNode, useState, createContext, Dispatch, SetStateAction, useContext } from "react";

interface StratProps {
  output: { data: { strategy: string }[] };
  loading: boolean;
  setOutput: Dispatch<SetStateAction<{ data: { strategy: string }[] }>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const StrategyContext = createContext<StratProps>({
  output: { data: [] },
  loading: false,
  setOutput: () => {},
  setLoading: () => {},
});

export const useStrategy = () => {
    return useContext(StrategyContext);
  };
export const StrategyProvider = ({ children }: { children: ReactNode }) => {
  const [output, setOutput] = useState<{ data: { strategy: string }[] }>({ data: [] });
  const [loading, setLoading] = useState<boolean>(false);
  console.log(output)
  return (
    <StrategyContext.Provider value={{ output, setOutput, loading, setLoading }}>
      {children}
    </StrategyContext.Provider>
  );
};
