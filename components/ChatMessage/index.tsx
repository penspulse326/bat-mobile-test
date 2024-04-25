type PropsType = {
  content: string;
};

function ChatMessage({ content }: PropsType) {
  return <p className="border border-slate-400 p-2">{content}</p>;
}

export default ChatMessage;
