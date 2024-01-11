
const menuOptions = [
  {
    key: 'video-group',
    label: '视频',
    type: 'group',
    children: [
      { type: 'divider' },
      {
        key: 'pic-stream',
        label: '音频一图流',
      },
      {
        key: 'ass-adapt',
        label: '字幕适配',
      },
      {
        key: 'ass-compress',
        label: '字幕压制',
      },
      {
        key: 'convert',
        label: '格式转换',
      }
    ],
  },
  {
    key: 'audio-group',
    label: '音频',
    type: 'group',
    children: [
      { type: 'divider' },
      {
        key: 'split',
        label: '整轨切分',
      },
      {
        key: 'extract',
        label: '音频提取',
      },
      {
        key: 'audio-converte',
        label: '格式转换',
      }
    ],
  },
  {
    key: 'other',
    label: '其他',
    type: 'group',
    children: [
      { type: 'divider' },
      {
        key: 'tagger',
        label: '元数据编辑'
      }
    ],
  }
]

export default menuOptions;