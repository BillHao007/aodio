import { useCallback, useState } from 'react';
import { Radio, Flex, Button, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { 
  CaretRightOutlined, 
  PauseOutlined, 
  DeleteOutlined, 
  MoreOutlined, 
  FileAddOutlined,
  FolderAddOutlined,
} from '@ant-design/icons';
import AoIconButton from '../AoIconButton';
import useAoTaskPageTempStyle from './style';
import { navbarOptions, TEMPLATE_PAGE_TYPE } from './constant';
import AoTaskList from '../AoTaskList';

export default function AoTaskPageTemp() {
  const { styles } = useAoTaskPageTempStyle();
  const [pageState, setPageState] = useState(TEMPLATE_PAGE_TYPE.converting);

  const handlePageStateChange = useCallback(({ target: { value } }: RadioChangeEvent) => {
    setPageState(value);
  }, [])

  return (
    <div className={styles.aoTaskPageTemplate}>
      <Flex 
        className="ao-task-page-template-navbar"
        justify="space-between"
      >
        <div className="left-area">
          <Radio.Group 
            options={navbarOptions}
            defaultValue={pageState}
            optionType="button"
            buttonStyle="solid"
            onChange={handlePageStateChange}
          />
        </div>
        <Space className="right-area">
          <Button type="primary" icon={<FileAddOutlined />}>创建任务</Button>
          <Button type="primary" icon={<FolderAddOutlined />}>创建批量任务</Button>
          <div className="icon-button-area">
            <AoIconButton icon={<CaretRightOutlined />} title="开始所有任务" />
            <AoIconButton icon={<PauseOutlined />} title="暂停所有任务" />
            <AoIconButton icon={<DeleteOutlined />} title="删除所有任务" />
            <AoIconButton icon={<MoreOutlined />} title="更多" />
          </div>
        </Space>
      </Flex>
      <div className="ao-task-page-template-task-list">
        <AoTaskList options={[{ className: "list-item" }]}/>
      </div>
    </div>
  )
}