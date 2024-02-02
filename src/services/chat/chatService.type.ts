export interface IHistoryMessage {
  receiverId: string;
  senderId: string;
  skip: number;
  limit: number;
}

export interface IResponseHistoryMessage {
  _id: string;
  senderId: string;
  receiverId: string;
  massage: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
