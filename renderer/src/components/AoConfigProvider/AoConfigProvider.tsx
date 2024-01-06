import { ConfigProvider, ConfigProviderProps } from "antd";

export interface AoConfigProviderProps extends ConfigProviderProps{};

export default function AoConfigProvider(props: AoConfigProviderProps) {
  const { children, ...rest } = props;
  return (
    <ConfigProvider {...rest}>
      {children}
    </ConfigProvider>
  );
}