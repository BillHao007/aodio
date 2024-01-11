// app全局状态管理
import { createContext, useContextState } from './library/state-mgmt';

export const AppContext = createContext();

export function useAppState<T>(key: string, initValue?: T): ReturnType<typeof useContextState<T>>;

export function useAppState(): ReturnType<typeof useContextState>;

export function useAppState<T>(key?: string, initValue?: T) {
  return useContextState(AppContext, key ?? '', initValue);
}