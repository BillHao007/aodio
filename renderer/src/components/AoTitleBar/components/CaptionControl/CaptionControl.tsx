import { Button } from 'antd';
import { MinusOutlined, BorderOutlined, CloseOutlined } from '@ant-design/icons';
import useCaptionControlStyles from './style';

export interface CaptionControlProps{
  className?: string;
}

export default function CaptionControl(props: CaptionControlProps) {
  const { className } = props;
  const { styles, cx } = useCaptionControlStyles();
  return (
    <div className={cx(styles.captionContol, className)}>
      <Button type="text" icon={<MinusOutlined />}/>
      <Button type="text" icon={<BorderOutlined />}/>
      <Button type="text" icon={<CloseOutlined />} className="close-button"/>
    </div>
  )
}