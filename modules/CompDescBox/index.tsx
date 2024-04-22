import InputMessage from '@/components/Inputs/InputMessage';
import ChatLogs from '../ChatLogs';
import Navbar from '../Navbar';

function CompDescBox() {
  return (
    <div>
      <h4 className="text-lg"> Modules/ Containers</h4>
      <h4 className="text-lg"> Components</h4>
      <div className="flex h-[667px] w-[375px] flex-col bg-blue-100 outline outline-2 outline-slate-400">
        <Navbar />
        <ChatLogs />
        <InputMessage />
      </div>
    </div>
  );
}

export default CompDescBox;
