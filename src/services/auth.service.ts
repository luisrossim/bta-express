import { AuthRequest, AuthResponse } from "@/models/dtos/auth.dto.js";
import { UserService } from "./user.service.js";
import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { comparePassword } from "./security/bcrypt.service.js";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "./security/jwt.service.js";

export class AuthService {
  private readonly userService;

  constructor(){
    this.userService = new UserService();
  }

  async authenticate(dto: AuthRequest){
    const user = await this.userService.findByEmail(dto.login);

    if(!user){
      throw new InvalidArgumentsException("Login não encontrado.")
    }

    const compareResult = await comparePassword(dto.password, user.password);

    if(!compareResult){
      throw new InvalidArgumentsException("Senha incorreta.")
    }
    
    const authResponse: AuthResponse = {
      login: user.email,
      role: user.role.descricao,
      accessToken: generateAccessToken(user.email, user.role.descricao),
      refreshToken: generateRefreshToken(user.email, user.role.descricao)
    }

    return authResponse;
  }


  async accessTokenRecover(refreshToken: string): Promise<AuthResponse> {
    const decoded = verifyRefreshToken(refreshToken);

    if(!decoded){
      throw new InvalidArgumentsException('Refresh token inválido.')
    }

    const newAccessToken = generateAccessToken(decoded.login, decoded.role)
    
    const updatedAuthData: AuthResponse = {
      login: decoded.login,
      role: decoded.role,
      accessToken: newAccessToken,
      refreshToken: refreshToken
    }

    return updatedAuthData;
  }
}