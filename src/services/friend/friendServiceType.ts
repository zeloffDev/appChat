export interface IGetFriends {
  userId: string;
}

export interface IResponseGetFriends {
  _id: string;
  avatar: string;
  name: string;
  userName: string;
  password: string;
  listFriend: any[];
  listFriendRequest: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
