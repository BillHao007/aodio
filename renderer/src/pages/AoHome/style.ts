import { createStyles } from "antd-style";

const useAoHomeStyles = createStyles(({ token, css }) => {
  return {
    aoPageHome: css`
      .ao-home-logo-area{
        width: 100%;
        text-align: center;

        .ao-home-logo{
          text-shadow: #5f62bb88 0px 0px 20px;
        }
      }
    `,
  };
});

export default useAoHomeStyles;