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
