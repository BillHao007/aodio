import React from 'react';
import type { AoTaskListProps } from "./interface";
import AoTaskItem from './AoTaskItem';
import useAoTaskListStyles from "./style"


const AoTaskList: React.FC<AoTaskListProps> & { AoTaskItem: typeof AoTaskItem } = (props) => {
  const { className, children, options = [] } = props;
  const { styles, cx } = useAoTaskListStyles();

  return (
    <div className={cx(styles.aoTaskList, className)}>
      {children ? children : (
        <>
          {options.map((option, index) => {
            const { key, ...rest } = option;
            return <AoTaskItem {...rest} key={key ?? index} />;
          })}
        </>
      )}
    </div>
  );
};

AoTaskList.AoTaskItem = AoTaskItem;

export default AoTaskList;