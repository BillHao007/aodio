import { createStyles } from "antd-style";

const useAppStyles = createStyles(({ css, cx, token }) => {
  return {
    aoApp: css`
      width: 100%;
      height: 100%;
      overflow: hidden;

      .ao-app-main{
        height: 100%;
        .ao-app-footer{
          color: #fff;
          font-size: .75rem;
        }
      }

      .ao-app-sub-main{
        height: 100%;

        .ao-app-sider{
          -webkit-app-region: drag; // electron窗体拖拽
        }

        .ao-app-logo-area {
          height: 4rem;
          line-height: 4rem;
          text-align: center;
        }
        
        .ao-app-sider-menu{
          height: calc(100% - 4rem);
        }

        .ao-app-header{
          -webkit-app-region: drag;
        }

        .ao-app-content{
          border-top-left-radius: ${token.borderRadius}px;
          background-color: #f5f5f5;
          padding: 1rem;
        }
      }
    `
  };
});

export default useAppStyles;