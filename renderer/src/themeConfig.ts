import type { ThemeConfig } from "antd";
import type { GetAntdTheme } from "antd-style";

const themeConfig: ThemeConfig | GetAntdTheme = {
  token: {
    colorPrimary: '#5f62bb',
  },
  components: {
    Layout: {
      headerPadding: 0,
      footerPadding: 4,
      headerBg: '#fff',
      siderBg: '#fff',
      bodyBg: '#fff',
      footerBg: '#5f62bb'
    },
    Menu: {
      activeBarBorderWidth: 0,
    }
  },
  cssVar: true
}

export default themeConfig;