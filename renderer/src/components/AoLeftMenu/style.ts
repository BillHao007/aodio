import { createStyles } from "antd-style";

const useAoLeftMenuStyles = createStyles(({ css, cx, token }) => {
  return {
    aoLeftMenu: css`
      width: 100%;

      .ant-menu-item{
        -webkit-app-region: no-drag;
      }
    `,
  };
})

export default useAoLeftMenuStyles;