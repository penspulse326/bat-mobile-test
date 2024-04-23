import BtnSubmitMessage from '@/components/Buttons/BtnSubmitMessage';
import InputMessage from '@/components/Inputs/InputMessage';

function InputChatMessage() {
  return (
    <div className="flex flex-grow items-center gap-2 border-t border-slate-400 bg-slate-100 px-4 py-2">
      <InputMessage />
      <BtnSubmitMessage />
    </div>
  );
}

export default InputChatMessage;
