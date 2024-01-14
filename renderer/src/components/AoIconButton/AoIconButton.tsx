import { Button, Tooltip } from 'antd';
import type { AoIconButtonProps } from './interface';

export default function AoIconButton(props: AoIconButtonProps) {
  const { title, className, style, icon } = props;

  return title ? (
    <Tooltip
      title={title}
    >
      <Button 
        type="text" 
        icon={icon}
        className={className}
        style={style}
      />
    </Tooltip>
  ) : (
    <Button 
      type="text" 
      icon={icon}
      className={className}
      style={style}
    />
  )
}