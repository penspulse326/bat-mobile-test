import ChatLogs from '../ChatLogs';
import Navbar from '../Navbar';

import { CompDescType } from '@/common/constants/types';
import BtnCamera from '@/components/Button/BtnCamera';
import BtnMenu from '@/components/Button/BtnMenu';
import BtnSubmitMessage from '@/components/Button/BtnSubmitMessage';
import ChatAvatar from '@/components/ChatAvatar';
import InputText from '@/components/Input/InputText';
import InputMessage from '@/modules/Problem3/InputMessage';

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
    title: 'ChatAvatar',
    comp: ChatAvatar,
    content: '顯示使用者頭像',
    params: [{ name: 'isMe', desc: '是否是自己的頭像' }],
    defaultParams: { isMe: true },
  },
  {
    title: 'ChatAvatar',
    comp: ChatAvatar,
    content: '顯示聊天訊息',
    params: [{ name: 'content', desc: '顯示訊息內容' }],
    defaultParams: {
      content:
        '測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息測試訊息',
    },
  },
  {
    title: 'InputText',
    comp: InputText,
    content: '輸入訊息，按下 Enter 觸發新增訊息 API',
  },
  {
    title: 'BtnSubmitMessage',
    comp: BtnSubmitMessage,
    content: '點擊觸發新增訊息 API',
  },
];

export const moduleList: CompDescType[] = [
  {
    title: 'Navbar',
    comp: Navbar,
    content: '組合 BtnCamera、BtnMenu',
  },
  {
    title: 'ChatLogs',
    comp: ChatLogs,
    content: '組合 ChatAvatar、ChatMessage',
  },
  {
    title: 'InputMessage',
    comp: InputMessage,
    content: '組合 ChatAvatar、ChatMessage',
  },
];
