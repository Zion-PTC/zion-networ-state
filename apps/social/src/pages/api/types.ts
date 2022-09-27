export type UserData = {
  nome: string;
  cognome: string;
  follower: string[];
  address: string;
  likes: [];
  reposts: [];
};
export type UserDatas = {
  [key: string]: UserData;
};

export interface ProductData {
  id: number;
  title: string;
  descrizione: string;
  type: string;
  znft: boolean;
  createdBy: string[];
  likes: string[];
  reposts: string[];
}
export type ProductDatas = { [key: string]: ProductData };

export interface ServiceData {
  id: number;
  title: string;
  descrizione: string;
  type: string;
  znft: boolean;
  createdBy: string[];
  likes: string[];
  reposts: string[];
}
export type ServiceDatas = { [key: string]: ServiceData };
