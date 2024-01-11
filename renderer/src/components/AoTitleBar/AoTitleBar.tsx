import { LeftOutlined, QuestionCircleOutlined, GithubOutlined, SkinOutlined, SettingOutlined } from '@ant-design/icons';
import { CaptionControl } from './components';
import { Button, Tooltip, Divider } from 'antd';
import useAoTitleBarStyles from './style';

export default function AoTitleBar() {
  const { styles } = useAoTitleBarStyles();

  return (
    <div className={styles.aoTitleBar}>
      <div className="left-area">
        <Button type="text" icon={<LeftOutlined />} className="ao-title-bar-item"/>
        <span className="ao-title-bar-item title">音频一图流</span>
        <Tooltip
          title="单图视频"
        >
          <Button type="text" icon={<QuestionCircleOutlined style={{ fontSize: '0.875rem'}}/>} className="ao-title-bar-item title-tip"/>
        </Tooltip>
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