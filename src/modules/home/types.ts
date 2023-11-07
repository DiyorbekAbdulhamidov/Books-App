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