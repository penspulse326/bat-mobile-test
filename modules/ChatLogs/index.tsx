import { messageLogs } from './data';
import ChatMessage from '@/components/ChatMessage';
import { MessageDataType } from '@/common/constants/types';

const userId = -1;

function ChatLogs() {
  const { logs } = messageLogs;

  return (
    <ul className="flex h-[calc(100%-96px)] flex-col gap-4 overflow-y-scroll p-4">
      {logs.map(({ id, username, content, time }: MessageDataType) => (
        <ChatMessage
          key={`${id}-${time}`}
          content={content}
          isMe={userId === id}
        />
      ))}
    </ul>
  );
}

export default ChatLogs;
