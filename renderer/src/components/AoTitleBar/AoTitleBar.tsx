import { Button, Divider } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, GithubOutlined, SkinOutlined, SettingOutlined } from '@ant-design/icons';
import AoIconButton from '../AoIconButton';
import { CaptionControl } from './components';
import useAoTitleBarStyles from './style';

export default function AoTitleBar() {
  const { styles } = useAoTitleBarStyles();

  return (
    <div className={styles.aoTitleBar}>
      <div className="left-area">
        <Button type="text" icon={<LeftOutlined />} className="ao-title-bar-item"/>
        <span className="ao-title-bar-item title">音频一图流</span>
        <AoIconButton
          title="单图视频"
          className="ao-title-bar-item title-tip"
          icon={<QuestionCircleOutlined style={{ fontSize: '0.875rem'}}/>}
        />
      </div>
      <div className="right-area">
        <Button type="text" icon={<SkinOutlined />} className="ao-title-bar-item"/>
        <Button type="text" icon={<SettingOutlined />} className="ao-title-bar-item"/>
        <Button type="text" icon={<GithubOutlined />} className="ao-title-bar-item"/>
        <Divider type="vertical" />
        <CaptionControl className="ao-title-bar-item"/>
      </div>
    </div>
  );
}