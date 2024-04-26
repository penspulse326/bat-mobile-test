import TableRow from './TableRow';

const data = [
  {
    city: '台北市',
    district: '松山區',
    stationName: '台北市台北市台北市',
    availableBike: '12',
    availableSpace: '12',
  },
  {
    city: '台北市',
    district: '松山區',
    stationName: '台北市台北市台北市',
    availableBike: '12',
    availableSpace: '12',
  },
];

function Table() {
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
          {data.map(
            (
              { city, district, stationName, availableBike, availableSpace },
              index,
            ) => (
              <TableRow
                key={stationName}
                {...{
                  city,
                  district,
                  stationName,
                  availableBike,
                  availableSpace,
                  index,
                }}
              />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
