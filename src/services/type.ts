export interface IResponse<Data> {
  data: Data;
  massage: string;
  status: number;
}

export interface IResponsePage<Data> {
  data: Data;
  page: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  status: number;
}

export interface IResponseSkipCount<Data> {
  data: Data;
  skip: number;
  limit: number;
  status: number;
  next: boolean;
}
