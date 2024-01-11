import { useContext, useEffect } from 'react';
import type { Context } from 'react';
import type { ContextProps } from './context';
import type { AnyObject } from '../type';
import { isEmpty, isObject } from '../utils';

export function useContextState<T> (context: Context<ContextProps>, key: string, initValue?: T): [T, (states: T | AnyObject) => void];

export function useContextState(context: Context<ContextProps>): [AnyObject, (states: AnyObject) => void];

export function useContextState<T>(
  context: Context<ContextProps>, 
  key?: string,
  initValue?: T 
) {
  const { state, dispatch } = useContext(context);

  const setState = (states: T | AnyObject) => {
    const settingStates = isObject(states) ? states : { [key ?? '']: states }
    dispatch({
      type: 'SET_STATE',
      ...settingStates,
    });
  };

  useEffect(() => {
    if (!isEmpty(key) && isEmpty(state[key ?? ''])) {
      setState(initValue ?? {});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [isEmpty(key) ? state : state[key ?? ''], setState];
}
