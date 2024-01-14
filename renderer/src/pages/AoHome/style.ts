import { createStyles } from "antd-style";

const useAoHomeStyles = createStyles(({ token, css }) => {
  return {
    aoPageHome: css`
      max-width: 1200px;
      margin: 0 auto;
      .ao-home-logo-area{
        width: 100%;
        text-align: center;

        .ao-home-logo{
          text-shadow: #5f62bb88 0px 0px 20px;
        }
        .ao-home-description{
          font-size: 1.2rem;
          color: ${token.colorTextTertiary}
        }
      }

      .ao-home-quick-start{
        justify-content: center;
        margin-top: 2rem;
        display: flex;
        .ao-home-quick-start-item{
          margin-left: 1.5rem;
          label {
            margin-right: 0.5rem;
          }
          &:first-child{
            margin-left: 0;
          }
        }
        .ao-home-quick-start-item-select{
          width: max-content;
        }
      }

      .ao-home-feat-display-card-area{
        display: flex;
        margin-top: 4rem;
        .ao-home-feat-display-card{
          width: 100%;
          margin-left: 2rem;
          background-color: ${token.colorFillTertiary};
          /* border: none; */
          &:first-child{
            margin-left: 0;
          }

          .ao-home-feat-display-avatar{
            border: none;
            background-color: transparent;
            background-image: linear-gradient(to right, #baa1e3, #5f62bb);
          }
        }
      }
    `,
  };
});

export default useAoHomeStyles;