import { Menu } from 'antd';
import type { AoLeftMenuProps } from './interface';
import menuOptions from './menu-options';
import useAoLeftMenuStyles from './style';

export default function AoLeftMenu(props: AoLeftMenuProps) {
  const { className } = props;
  const { styles, cx } = useAoLeftMenuStyles();
  return (
    <Menu
      className={cx(className, styles.aoLeftMenu)}
      items={menuOptions}
    />
  )
}