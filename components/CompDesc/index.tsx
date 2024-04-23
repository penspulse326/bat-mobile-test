type PropsType = {
  comp: any;
  title: string;
  content: string;
  params?: { name: string; desc: string }[];
};

function CompDesc({ comp, title, content, params }: PropsType) {
  return (
    <li className="flex p-4">
      <section className="w-full max-w-[375px]">{comp}</section>
      <div className="mx-8 w-[1px] bg-slate-400" />
      <section>
        <h5 className="font-bold">元件名稱：{title}</h5>
        <h6 className="mt-2">功能描述：{content}</h6>
        {params && (
          <>
            <h6 className="mt-2">參數：</h6>{' '}
            <ul>
              {params.map(({ name, desc }) => (
                <li key={name}>
                  {name} | {desc}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </li>
  );
}

CompDesc.defaultProps = {
  params: null,
};

export default CompDesc;
