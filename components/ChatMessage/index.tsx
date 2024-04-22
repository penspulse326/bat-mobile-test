type PropsType = {
  username: string;
  content: string;
  isMe: boolean;
};

function ChatMessage({ username, content, isMe }: PropsType) {
  const alignStyle = {
    alignSelf: isMe ? 'flex-end' : 'flex-start',
  };

  const orderStyle = {
    order: isMe ? 2 : 0,
  };

  return (
    <li style={alignStyle} className="flex items-end gap-2">
      <div
        style={orderStyle}
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-300"
      >
        {username[0]}
      </div>
      <p className="border border-slate-400 p-2">{content}</p>
    </li>
  );
}

export default ChatMessage;
