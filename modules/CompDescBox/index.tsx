import ChatLogs from '../ChatLogs';
import Navbar from '../Navbar';
import { componentList } from './data';
import CompDesc from '@/components/CompDesc';
import InputMessage from '@/components/Inputs/InputMessage';

function CompDescBox() {
  return (
    <div>
      <h4 className="text-lg font-bold"> Components</h4>
      <hr className="my-4 border-2" />
      <ul>
        {componentList.map(({ comp, title, content, params }) => (
          <CompDesc
            key={title}
            comp={comp({ username: 'test', content: 'test', isMe: true })}
            title={title}
            content={content}
            params={params}
          />
        ))}
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
