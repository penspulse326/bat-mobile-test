import { ReactElement } from 'react';

type PropsType = {
  comp: ReactElement;
  name: string;
  desc: string;
};

function CompDesc({ comp, name, desc }: PropsType) {
  return (
    <li className="flex p-4">
      <section className="w-1/4">{comp}</section>
      <section>
        <h5 className="font-bold">元件名稱：{name}</h5>
        <h6 className="mt-2">功能描述：</h6>
        <p>{desc}</p>
      </section>
    </li>
  );
}

export default CompDesc;
