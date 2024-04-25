import ChatLogs from '../ChatLogs';
import InputChatMessage from '../../../components/Inputs/InputMessage';
import Navbar from '../Navbar';
import { componentList, moduleList } from './data';
import CompDesc from '@/components/CompDesc';

function CompDescBox() {
  return (
    <div>
      <h4 className="text-lg font-bold"> Components</h4>
      <hr className="my-4 border-2" />
      <ul>
        {componentList.map(
          ({ comp, title, content, params, defaultParams }) => (
            <CompDesc
              key={title}
              comp={comp(defaultParams)}
              title={title}
              content={content}
              params={params}
            />
          ),
        )}
      </ul>
      <h4 className="mt-8 text-lg font-bold"> Modules/ Containers</h4>
      <hr className="my-4 border-2" />
      <ul>
        {moduleList.map(({ comp, title, content, params, defaultParams }) => (
          <CompDesc
            key={title}
            comp={comp(defaultParams)}
            title={title}
            content={content}
            params={params}
          />
        ))}
      </ul>
      <h4 className="mt-8 text-lg font-bold"> Mock</h4>
      <hr className="my-4 border-2" />
      <div className="flex h-[667px] w-[375px] flex-col bg-blue-100 outline outline-2 outline-slate-400">
        <Navbar />
        <ChatLogs />
        <InputChatMessage />
      </div>
    </div>
  );
}

export default CompDescBox;
