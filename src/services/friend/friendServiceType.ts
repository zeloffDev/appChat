export interface IGetFriends {
  userId: string;
  name?: string | null;
  limit: number;
  skip: number;
}

export interface IAddFriend {
  userId: string;
  friendId: string;
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
