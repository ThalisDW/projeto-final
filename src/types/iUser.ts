import IErrands from "./iErrands";

interface IUser {
  name: string;
  senha: string;
  id: string;
  recados: IErrands[];
}

export default IUser;
