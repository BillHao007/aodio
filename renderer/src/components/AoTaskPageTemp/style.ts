import { createStyles } from "antd-style";

const useAoTaskPageTempStyle = createStyles(({ token, css }) => {
  return {
    aoTaskPageTemplate: css`
      width: 100;
      height: 100%;

      .ao-task-page-template-task-list{
        margin-top: 16px;
        height: calc(100% - 32px - 16px);
        overflow: auto;
      }
    `
  }
})

export default useAoTaskPageTempStyle;