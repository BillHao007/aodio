import { createStyles } from "antd-style";

const useCaptionControlStyles = createStyles(({ css, cx, token }) => {
  return {
    captionContol: css`
      display: inline-block;
      -webkit-app-region: no-drag;

      .close-button:hover {
        background-color: #c42b1c !important;
        color: #fff !important;
      }
    `
  };
});

export default useCaptionControlStyles;