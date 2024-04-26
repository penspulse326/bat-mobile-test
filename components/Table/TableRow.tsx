type PropsType = {
  city: string;
  district: string;
  stationName: string;
  availableBike: string;
  availableSpace: string;
  index: number;
};

function TableRow({
  city,
  district,
  stationName,
  availableBike,
  availableSpace,
  index,
}: PropsType) {
  return (
    <tr className={`${index % 2 && 'bg-grey-light'}`}>
      <td className="min-w-14">{city}</td>
      <td className="min-w-14">{district}</td>
      <td className="min-w-32">{stationName}</td>
      <td className="min-w-14">{availableBike}</td>
      <td className="min-w-14">{availableSpace}</td>
    </tr>
  );
}

export default TableRow;
