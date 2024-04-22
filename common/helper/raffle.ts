import { PrizeListType } from '../constants/types';

function raffle(prizeList: PrizeListType) {
  const randomNumber = parseFloat((Math.random() * 100).toFixed(1));
  const { prize1, prize2, prize3, prize4, prize5 } = prizeList;

  if ((randomNumber > 33.4 && randomNumber <= 58.4) || prize5.amount > 0) {
    return 5;
  }

  if ((randomNumber > 15.4 && randomNumber <= 33.4) || prize4.amount > 0) {
    return 4;
  }

  if ((randomNumber > 2.4 && randomNumber <= 15.4) || prize3.amount > 0) {
    return 3;
  }

  if ((randomNumber > 0.1 && randomNumber <= 2.4) || prize2.amount > 0) {
    return 2;
  }

  if (randomNumber < 0.1 || prize1.amount > 0) {
    return 1;
  }

  return 0;
}

export default raffle;
