import Icon from '@ant-design/icons';
import type { AoIconProps } from './types';
import { ReactComponent as AudioFileIcon } from '@/assets/icons/AudioFile.svg';

export default function AudioFile(props: AoIconProps) {
  return <Icon component={AudioFileIcon} {...props}/>
}