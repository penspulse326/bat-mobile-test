import ChatLogs from '../ChatLogs';
import Navbar from '../Navbar';
import CompDesc from '@/components/CompDesc';
import InputMessage from '@/components/Inputs/InputMessage';

function CompDescBox() {
  return (
    <div>
      <h4 className="text-lg font-bold"> Components</h4>
      <hr className="my-4 border-2" />
      <ul>
        <CompDesc />
      </ul>
      <h4 className="text-lg font-bold"> Modules/ Containers</h4>
      <hr className="my-4 border-2" />
      <div className="flex h-[667px] w-[375px] flex-col bg-blue-100 outline outline-2 outline-slate-400">
        <Navbar />
        <ChatLogs />
        <InputMessage />
      </div>
    </div>
  );
}

export default CompDescBox;
