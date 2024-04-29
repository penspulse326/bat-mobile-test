import { UbikeDataType } from '@/common/constants/types';
import TableRow from './TableRow';

type PropsType = {
  city: string;
  data: UbikeDataType[] | null;
};

function Table({ city = '臺北市', data }: PropsType) {
  console.log(data);
  return (
    <div className="relative overflow-x-auto rounded-lg border border-grey  lg:rounded-[28px] lg:text-lg">
      <table className="w-full overflow-hidden">
        <thead className="whitespace-nowrap bg-primary text-white">
          <tr>
            <th>縣市</th>
            <th>區域</th>
            <th>站點名稱</th>
            <th>可借車輛</th>
            <th>可還空位</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: UbikeDataType, index) => (
            <TableRow key={item.sno} city={city} index={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
