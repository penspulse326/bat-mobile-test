import ChatMessage from '@/components/ChatMessage';
import ChatAvatar from '@/components/ChatAvatar';

import { messageLogs } from './data';

import { MessageDataType } from '@/common/constants/types';

const userId = -1;

function ChatLogs() {
  const { logs } = messageLogs;

  return (
    <ul className="flex h-[calc(100%-96px)] flex-col gap-4 overflow-y-scroll p-4">
      {logs.map(({ id, content, time }: MessageDataType) => {
        const isMe = id === userId;
        const alignStyle = {
          alignSelf: isMe ? 'flex-end' : 'flex-start',
        };
        return (
          <li key={time} style={alignStyle} className="flex items-end gap-2">
            <ChatAvatar isMe={isMe} />
            <ChatMessage content={content} />
          </li>
        );
      })}
    </ul>
  );
}

export default ChatLogs;
