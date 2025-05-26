import { Usuario, Prisma, Role } from "@prisma/client";

export type User = Usuario;
export type CreateUser = Prisma.UsuarioCreateInput;

export interface UserWithIncludes extends User {
  role: Role
}