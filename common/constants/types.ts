export type PrizeType = {
  name: string;
  amount: number;
  message: string;
};

export type PrizeListType = Record<string, PrizeType>;

export type MessageDataType = {
  id: number;
  username: string;
  content: string;
  time: string;
};

export type MessageLogsType = {
  targetName: string;
  logs: MessageDataType[];
};
