import type { ComponentType } from 'react';
import type { AnyObject } from "../library/type";

export type RouteConfigList<T = AnyObject> = Array<RouteConfig<T>>;

export interface RouteConfig<T = AnyObject>{
  name: string;
  path: string;
  component: ComponentType<T>;
  props?: AnyObject;
}