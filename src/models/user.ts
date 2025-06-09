import { Usuario, Role } from "@prisma/client";

export type User = Usuario;
export type UserOmitPassword = Omit<User, 'password'>;

export interface UserWithIncludes extends User {
  role: Role
}