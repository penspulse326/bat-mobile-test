import { PrizeListType } from '../constants/types';

function raffle(prizeList: PrizeListType) {
  const randomNumber = parseFloat((Math.random() * 100).toFixed(1));
  let targetIndex = 0;

  // 判斷抽取數字在哪個區間
  if (randomNumber > 33.4 && randomNumber <= 58.4) {
    targetIndex = 5;
  }
  if (randomNumber > 15.4 && randomNumber <= 33.4) {
    targetIndex = 4;
  }
  if (randomNumber > 2.4 && randomNumber <= 15.4) {
    targetIndex = 3;
  }
  if (randomNumber > 0.1 && randomNumber <= 2.4) {
    targetIndex = 2;
  }
  if (randomNumber < 0.1) {
    targetIndex = 1;
  }

  const key = `prize${targetIndex}` as keyof PrizeListType;

  // 如傳入 targetIndex 為 0 或該獎項數量為 0 則直接回傳原陣列與未中獎訊息
  if (targetIndex === 0 || prizeList[key].amount <= 0) {
    return { newList: prizeList, message: '哭哭沒中QQ', name: '沒中' };
  }

  const { message, name, amount } = prizeList[key];

  const newList = {
    ...prizeList,
    [key]: {
      ...prizeList[key],
      amount: amount - 1,
    },
  };

  return {
    newList,
    message,
    name,
  };
}

export default raffle;
