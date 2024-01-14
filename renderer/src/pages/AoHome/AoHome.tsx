import { Button, Select, Card, Avatar } from "antd";
import { EditOutlined, VideoCameraOutlined, AudioOutlined } from "@ant-design/icons";
import { AoLogo } from "@/components/AoLogo";
import { featList, formatList } from "./constant";
import useAoHomeStyles from "./style";

export default function AoHome() {
  const { styles } = useAoHomeStyles();

  return (
    <div className={styles.aoPageHome}>
      <div className="ao-home-logo-area">
        <AoLogo size={90} className="ao-home-logo"/>
        <p className="ao-home-description">一款功能齐全的音视频处理软件</p>
      </div>
      <div className="ao-home-quick-start">
        <div className="ao-home-quick-start-item">
          <label>快速开始</label>
          <Button type="primary" size="large">选择文件</Button>
        </div>
        <div className="ao-home-quick-start-item">
          <label>执行</label>
          <Select 
            options={featList}
            size="large" 
            className="ao-home-quick-start-item-select"
            defaultValue="0"
          />
        </div>
        <div className="ao-home-quick-start-item">
          <label>到</label>
          <Select
            options={formatList}
            size="large" 
            className="ao-home-quick-start-item-select"
            defaultValue="0"
          />
        </div>
      </div>
      <div className="ao-home-feat-display-card-area">
        <Card className="ao-home-feat-display-card" bordered={false}>
          <Card.Meta
            avatar={<Avatar className="ao-home-feat-display-avatar" icon={<AudioOutlined />} shape="square"/>} 
            title="音频处理"
            description="提供音频格式转换的基础功能，并包含cue音频整轨切分、音频提取等特色功能"
          />
        </Card>
        <Card className="ao-home-feat-display-card" bordered={false}>
          <Card.Meta
            avatar={<Avatar className="ao-home-feat-display-avatar" icon={<VideoCameraOutlined />} shape="square"/>} 
            title="视频处理"
            description="提供视频格式转换基础功能，并包含视频字幕处理、一图流视频生成等特色功能"
          />
        </Card>
        <Card className="ao-home-feat-display-card" bordered={false}>
          <Card.Meta
            avatar={<Avatar className="ao-home-feat-display-avatar" icon={<EditOutlined />} shape="square"/>}
            title="元数据编辑"
            description="提供便捷快速的音视频元数据编辑功能，轻松管理本地专辑"
          />
        </Card>
      </div>
    </div>
  )
}