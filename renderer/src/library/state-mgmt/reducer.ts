import { AnyObject } from "../type";

export type ActionTypes = 'SET_STATE';
export interface ActionProps extends AnyObject {
  type?: ActionTypes;
}

export const createReducer = (initState: AnyObject) => {
  return function reducer(state = initState, action: ActionProps) {
    const { type, ...payload } = action;
    switch (type) {
      case 'SET_STATE':
        return {
          ...state,
          ...payload,
        };
      default:
        return state;
    }
  }
};