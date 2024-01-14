import { isNumber } from "@/library/utils";
import { createStyles } from "antd-style";
import type { AoLogoProps } from './interface';

const useStyles = createStyles(({ css }, props: { size?: string | number } = {}) => {
  const { size = 80 } = props;
  const fontSize = isNumber(size) ? size + 'px' : size;

  return {
    aoLogo: css`
      font-size: ${fontSize};
      font-weight: bold;
      background: linear-gradient(to right, #baa1e3, #5f62bb);
      background-clip: text;
      color: transparent;
    `,
  };
});

export default function AoLogo(props: AoLogoProps) {
  const { size, className } = props;
  const { styles, cx } = useStyles({ size });

  return (
    <span className={cx(styles.aoLogo, className)}>AODIO</span>
  )
}