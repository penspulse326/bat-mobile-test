import { CompDescType } from '@/common/constants/types';
import BtnCamera from '@/components/Buttons/BtnCamera';
import BtnMenu from '@/components/Buttons/BtnMenu';
import ChatMessage from '@/components/ChatMessage';

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
    title: 'ChatMessage',
    comp: ChatMessage,
    content: '顯示聊天訊息',
    params: [
      { name: 'username', desc: '使用者名稱' },
      { name: 'content', desc: '訊息內容' },
      { name: 'isMe', desc: '是否是自己的訊息' },
    ],
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
];
