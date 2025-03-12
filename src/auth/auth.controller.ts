import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(){}

  @Post('register')
  registerUser(){}

  @Post('login')
  loginUser(){}

  @Post('verify')
  verifyUser(){}
}
