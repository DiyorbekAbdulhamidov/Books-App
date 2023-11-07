export namespace IEntity {
  export interface User {
    id: number,
    name: string,
    email: string,
    key: string,
    secret: string
  }

  export interface LoginValues{
    email : string,
    password : string
  }

  export interface RegisterValues{
    name : string,
    email : string,
    key : string,
    secret : string,
  }

  export interface UserKey {
    key: string;
  }
}

export namespace IContext {
  export interface AuthContextType {
    user: IEntity.User | null;
    auth: (user: IEntity.User) => void;
    logout: () => void;
    userData: IEntity.User | null;
    setUserData: (userData: IEntity.User) => void;
  }
}