import type { ReactNode } from "react";
import type { ComponentBaseProps } from "../types";

export interface AoIconButtonProps extends ComponentBaseProps {
  title?: string;
  icon: ReactNode;
}