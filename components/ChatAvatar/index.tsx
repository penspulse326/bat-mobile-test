import Image from 'next/image';

type PropsType = {
  isMe: boolean;
};

function ChatAvatar({ isMe }: PropsType) {
  const orderStyle = {
    order: isMe ? 2 : 0,
  };

  return (
    <div
      style={orderStyle}
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-300"
    >
      {isMe ? (
        '我'
      ) : (
        <Image src="/favicon.png" alt="avatar" width={24} height={24} />
      )}
    </div>
  );
}

export default ChatAvatar;
