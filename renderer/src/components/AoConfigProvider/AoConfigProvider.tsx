import { ThemeProvider, ThemeProviderProps } from "antd-style";

export interface AoConfigProviderProps<T, S> extends ThemeProviderProps<T, S>{};

export default function AoConfigProvider<T = any, S = any>(props: AoConfigProviderProps<T, S>) {
  const { children, ...rest } = props;
  return (
    <ThemeProvider {...rest}>
      {children}
    </ThemeProvider>
  );
}