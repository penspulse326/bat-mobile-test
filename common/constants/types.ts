import { FC } from 'react';

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

export type CompDescType = {
  comp: FC<any>;
  title: string;
  content: string;
  params?: { name: string; desc: string }[];
  defaultParams?: Record<string, any>;
};

export type UbikeDataType = {
  sno: string;
  sna: string;
  tot: number;
  sbi: number;
  sarea: string;
  bemp: string;
};
