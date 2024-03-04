export interface IUserSignIn {
  userName: string;
  password: string;
}
export interface IParamsInfo {
  userId: string;
}
export interface IResponseUserSignIn {
  _id: string;
  avatar: string;
  name: string;
  about: string;
  userName: string;
  password: string;
  listFriend: string[];
  listFriendRequest: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUserSignUp {
  name: string;
  userName: string;
  password: string;
  rePassword: string;
}
export interface IUpdateUserInfo {
  _id: string;
  avatar?: string;
  name?: string;
  about?: string;
}
