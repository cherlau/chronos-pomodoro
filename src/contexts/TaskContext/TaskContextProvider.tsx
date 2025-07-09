import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  const [] = useReducer((state, action) => {
    return state;
  }, 0);

  // useEffect(() => {
  //   console.log("state: ", state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>Testando</h1>
    </TaskContext.Provider>
  );
}
