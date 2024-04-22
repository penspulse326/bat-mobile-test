export type PrizeType = {
  name: string;
  amount: number;
  message: string;
};

export type PrizeListType = Record<string, PrizeType>;
