import type { ComponentBaseProps } from "../types";

export interface AoTaskItemProps extends ComponentBaseProps {};

export interface AoTaskListProps extends ComponentBaseProps {
  options?: Array<AoTaskListOptionProps>
};

export interface AoTaskListOptionProps extends AoTaskItemProps {
  key?: string
};