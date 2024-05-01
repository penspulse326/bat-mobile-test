import { UbikeDataType } from '@/common/constants/types';

type PropsType = {
  city: string;
  index: number;
} & UbikeDataType;

function TableRow({ city, sarea, sna, sbi, bemp, index }: PropsType) {
  return (
    <tr className={`${index % 2 && 'bg-grey-light'}`}>
      <td className="min-w-20">{city}</td>
      <td className="min-w-20">{sarea}</td>
      <td className="min-w-40">{sna?.split('_')[1]}</td>
      <td className="min-w-20 font-bold text-primary">{sbi}</td>
      <td className="min-w-20 font-bold text-primary">{bemp}</td>
    </tr>
  );
}

export default TableRow;
