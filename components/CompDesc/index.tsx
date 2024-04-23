function CompDesc() {
  return (
    <li className="flex p-4">
      <section className="w-1/4">
        <BtnCamera />
      </section>
      <section>
        <h5 className="font-bold">元件名稱：BtnCamera</h5>
        <h6 className="mt-2">功能描述：</h6>
        <p>點擊觸發相機功能 API</p>
      </section>
    </li>
  );
}

export default CompDesc;
