type PrizeType = {
  name: string;
  amount: number;
};

const prizes: Record<string, PrizeType> = {
  firstPrize: {
    name: '1 獎',
    amount: 1,
  },
  secondPrinze: {
    name: '2 獎',
    amount: 1,
  },
  thirdPrize: {
    name: '3 獎',
    amount: 2,
  },
  fourthPrize: {
    name: '4 獎',
    amount: 5,
  },
  fifthPrize: {
    name: '5 獎',
    amount: 11,
  },
};

export default prizes;
