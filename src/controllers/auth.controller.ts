import { CookieOptions, Request, Response } from "express";
import { AuthService } from "@/services/auth.service.js";
import { AuthRequest, AuthResponse } from "@/models/dtos/auth.dto.js";

export class AuthController {
  private readonly authService: AuthService;
  private readonly accessTokenMaxAge: number = 24 * 60 * 60 * 1000;
  private readonly refreshTokenMaxAge: number = 6 * 30 * 24 * 60 * 60 * 1000;
  private jwtCookieOptions: CookieOptions;

  
  constructor() {
    this.authService = new AuthService();
    this.jwtCookieOptions = {
      httpOnly: true,
      secure: false,
      sameSite: 'strict' as const,
      path: '/'
    }
  }


  async login(req: Request, res: Response) {
    const authRequest: AuthRequest = req.body;

    const authResponse: AuthResponse = await this.authService.authenticate(authRequest);

    res.cookie('accessToken', authResponse.accessToken, {
      ...this.jwtCookieOptions,
      maxAge: this.accessTokenMaxAge
    });

    res.cookie('refreshToken', authResponse.refreshToken, {
      ...this.jwtCookieOptions,
      maxAge: this.refreshTokenMaxAge
    });

    res.status(200).json({
      login: authResponse.login,
      role: authResponse.role
    });
  }


  async refreshAccess(req: Request, res: Response) {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token inexistente.' });
    }

    const updatedAuthData = await this.authService.accessTokenRecover(refreshToken);

    res.cookie('accessToken', updatedAuthData.accessToken, {
      ...this.jwtCookieOptions,
      maxAge: this.accessTokenMaxAge
    });

    res.cookie('refreshToken', updatedAuthData.refreshToken, {
      ...this.jwtCookieOptions,
      maxAge: this.refreshTokenMaxAge
    });
    
    res.status(200).send();
  }


  async logoutAndClearCookies(req: Request, res: Response) {
    res.clearCookie('accessToken', this.jwtCookieOptions,);
    res.clearCookie('refreshToken', this.jwtCookieOptions);
    res.status(200).send();
  }


  async checkAccess(req: Request, res: Response) {
    return res.status(200).json({ message: 'Sessão válida.' });
  }
}