import { createStyles } from "antd-style";

const useAoTaskListStyles = createStyles(({ css, token }) => {
  return {
    aoTaskList: css`
      
    `,
    aoTaskItem: css`
      .ao-task-item-main{
        width: 100%;
      }

      .ao-task-item-file-meta{
        width: 100%;
      }

      .ao-task-item-file-operation{
        width: max-content;
      }
    `,
  }
});

export default useAoTaskListStyles;