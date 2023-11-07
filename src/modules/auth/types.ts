export namespace IEntity {
  export interface User {
    id: number,
    name: string,
    email: string,
    key: string,
    secret: string
  }

  export interface UserKey {
    key: string;
  }
}

export namespace IContext {
  export interface AuthContextType {
    user: IEntity.User | null;
    login: (user: IEntity.User) => void;
    logout: () => void;
    userData: IEntity.User | null;
    setUserData: (userData: IEntity.User) => void;
  }
}