import { CompDescType } from '@/common/constants/types';
import BtnCamera from '@/components/Buttons/BtnCamera';
import BtnMenu from '@/components/Buttons/BtnMenu';
import BtnSubmitMessage from '@/components/Buttons/BtnSubmitMessage';
import ChatMessage from '@/components/ChatMessage';
import Avatar from '@/components/ChatMessage/Avatar';
import Message from '@/components/ChatMessage/Message';
import InputMessage from '@/components/Inputs/InputChatMessage/InputBox';

export const componentList: CompDescType[] = [
  {
    title: 'BtnCamera',
    comp: BtnCamera,
    content: '點擊後觸發相機 API',
  },
  {
    title: 'BtnMenu',
    comp: BtnMenu,
    content: '點擊後呼叫選單',
  },
  {
    title: 'Avatar',
    comp: Avatar,
    content: '顯示使用者頭像',
    params: [{ name: 'isMe', desc: '是否是自己的頭像' }],
    defaultParams: { isMe: true },
  },
  {
    title: 'Message',
    comp: Message,
    content: '顯示聊天訊息',
    params: [{ name: 'content', desc: '顯示訊息內容' }],
    defaultParams: {
      content:
        '測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息',
    },
  },

  {
    title: 'InputMessage',
    comp: InputMessage,
    content: '輸入訊息，按下 Enter 觸發新增訊息 API',
  },
  {
    title: 'BtnSubmitMessage',
    comp: BtnSubmitMessage,
    content: '點擊觸發新增訊息 API',
  },
];

export const moduleList = [
  {
    name: 'Navbar',
    comp: 'Navbar',
    desc: 'Navbar',
  },
  {
    name: 'ChatLogs',
    comp: 'ChatLogs',
    desc: 'ChatLogs',
  },
  {
    name: 'InputMessage',
    comp: 'InputMessage',
    desc: 'InputMessage',
  },
  {
    title: 'ChatMessage',
    comp: ChatMessage,
    content: '顯示聊天訊息',
    params: [
      { name: 'username', desc: '使用者名稱（這邊可以再擴充成圖片）' },
      { name: 'content', desc: '訊息內容' },
      { name: 'isMe', desc: '是否是自己的訊息' },
    ],
    defaultParams: {
      username: 'test',
      content:
        '測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息',
      isMe: true,
    },
  },
];
