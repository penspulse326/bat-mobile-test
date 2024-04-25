import BtnSubmitMessage from '@/components/Buttons/BtnSubmitMessage';
import InputText from '../InputText';

function InputMessage() {
  return (
    <div className="flex flex-grow items-center gap-2 border-t border-slate-400 bg-slate-100 px-4 py-2">
      <InputText />
      <BtnSubmitMessage />
    </div>
  );
}

export default InputMessage;
