import Image from 'next/image';

function InputMessage() {
  return (
    <div className="flex items-center gap-2 border-t border-slate-400 px-4 py-2">
      <input
        type="text"
        placeholder="輸入聊天內容"
        className="w-full rounded-full px-3 py-1 text-sm outline-slate-400 focus:outline-2"
      />
      <button type="button" className="h-6 w-6 flex-shrink-0">
        <Image
          src="/icon-input-message.svg"
          alt="button to open menu"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default InputMessage;
