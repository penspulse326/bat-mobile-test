import InputMessage from '@/components/Inputs/InputMessage';
import ChatLogs from '../ChatLogs';
import Navbar from '../Navbar';

function CompDescBox() {
  return (
    <div>
      <h4 className="text-lg"> Modules/ Containers</h4>
      <h4 className="text-lg"> Components</h4>
      <div className="h-[667px] w-[375px] bg-blue-100">
        <Navbar />
        <ChatLogs />
        <InputMessage />
      </div>
    </div>
  );
}

export default CompDescBox;
