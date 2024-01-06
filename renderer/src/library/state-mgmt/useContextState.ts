import { useContext, useCallback, useEffect } from 'react';
import type { Context } from 'react';
import type { ContextProps } from './context';
import { isEmpty, isObject } from '../utils';

export default function useContextState(
  context: Context<ContextProps>, 
  key?: string,
  initValue?: any
) {
  const { state, dispatch } = useContext(context);

  const setState = useCallback((states: any) => {
    const settingStates = isObject(states) ? states : { [key ?? '']: states }
    dispatch({
      type: 'SET_STATE',
      ...settingStates,
    });
  }, [key, dispatch]);

  useEffect(() => {
    if (!isEmpty(key) && isEmpty(state[key ?? ''])) {
      setState(initValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [isEmpty(key) ? state : state[key ?? ''], state, setState];
}