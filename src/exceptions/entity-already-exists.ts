import { HttpException } from "./http-exception.js";

export class EntityAlreadyExistsException extends HttpException {
  constructor(message: string){
    super(409, message);
  }
}