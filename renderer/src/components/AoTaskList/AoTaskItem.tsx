import { useState, useCallback, useMemo } from 'react';
import { Card, Flex, Typography, Space, Progress } from 'antd';
import { CaretRightOutlined, DeleteOutlined, FolderOutlined, SettingOutlined } from '@ant-design/icons';
import AoIconButton from '../AoIconButton';
import { AudioFile } from '@/icons';
import useAoTaskListStyles from './style';
import { AoTaskItemProps } from './interface';

const { Title } = Typography;

export default function AoTaskItem(props: AoTaskItemProps) {
  const { styles } = useAoTaskListStyles();
  const [taskName, setTaskName] = useState('');

  const handleEditableInfoChange = useCallback((value: string) => {
    setTaskName(value);
  }, []);

  const editableInfo = useMemo(() =>  ({
    onChange: handleEditableInfoChange,
    autoSize: { minRows: 1, maxRows: 1},
  }), [handleEditableInfoChange])

  return (
    <Card className={styles.aoTaskItem}>
      <Flex className="ao-task-item-content-wrapper" gap={16}>
        <div className="ao-task-item-title-image">
          <AudioFile style={{ fontSize: '6rem' }}/>
        </div>
        <div className="ao-task-item-main">
          <Title 
            level={5} 
            editable={editableInfo} 
            ellipsis={{ rows: 1,  tooltip: taskName }}
          >
            {taskName}
          </Title>
          <Flex className="ao-task-item-file-info" gap={16}>
            <div className="ao-task-item-file-meta">
              abcd
            </div>
            <div className="ao-task-item-file-operation">
              <Space>
                <AoIconButton icon={<CaretRightOutlined />} title="开始任务" />
                <AoIconButton icon={<DeleteOutlined />} title="删除任务" />
                <AoIconButton icon={<FolderOutlined />} title="查看输出文件夹" />
                <AoIconButton icon={<SettingOutlined />} title="输出配置" />
              </Space>
              <Progress percent={60} size="small"/>
            </div>
          </Flex>
        </div>
      </Flex>
    </Card>
  )
}