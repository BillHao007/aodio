import { createStyles } from "antd-style";

const useAoTitleBarStyles = createStyles(({ css, cx, token }) => {
  return {
    aoTitleBar: css`
      display:flex;
      width: 100%;
      height: 4rem;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 1rem;

      .ao-title-bar-item{
        -webkit-app-region: no-drag;
      }

      .left-area{
        width: max-content;
        white-space: nowrap;

        .title{
          font-size: 1.2rem;
          font-weight: bold;
        }

        .title-tip{
          color: ${token.colorTextTertiary} !important;
          cursor: pointer;
        }
        .ao-title-bar-item{
          margin-right: 0.2rem;
        }
      }

      .right-area{
        width: 100%;
        text-align: right;

        // .tool-bar-item{
        //   margin-right: 0.4rem;
        //   font-size: 1rem;
        // }

        .ao-title-bar-caption-control{
          margin-left: 0.5rem;
        }
      }
    `
  }
});

export default useAoTitleBarStyles;