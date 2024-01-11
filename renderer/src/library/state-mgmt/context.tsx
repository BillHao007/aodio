import React, { useReducer } from 'react';
import type { Dispatch, Context, ReactNode } from "react";
import type { AnyObject } from '../type';
import type { ActionProps } from './reducer';
import { createReducer } from "./reducer";

export interface ContextProps{
  state: AnyObject;
  dispatch: Dispatch<ActionProps>;
}

export interface ContextProviderProps extends AnyObject{
  context: Context<ContextProps>;
  initState?: AnyObject;
  children: ReactNode;
} 

export const createContext = (contextProps?: ContextProps) => 
  React.createContext<ContextProps>(contextProps || {} as ContextProps)

export default function StateMgmtProvider(props: ContextProviderProps) {
  const { context: Context, initState = {}, children } = props;
  const reducer = createReducer(initState);
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
}