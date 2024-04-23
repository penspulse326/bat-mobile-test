import Avatar from './Avatar';
import Message from './Message';

type PropsType = {
  content: string;
  isMe: boolean;
};

function ChatMessage({ content, isMe }: PropsType) {
  const alignStyle = {
    alignSelf: isMe ? 'flex-end' : 'flex-start',
  };

  return (
    <li style={alignStyle} className="flex items-end gap-2">
      <Avatar isMe={isMe} />
      <Message content={content} />
    </li>
  );
}

export default ChatMessage;
