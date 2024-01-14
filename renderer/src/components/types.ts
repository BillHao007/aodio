import type { CSSProperties, ReactNode } from "react"

export interface ComponentBaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};