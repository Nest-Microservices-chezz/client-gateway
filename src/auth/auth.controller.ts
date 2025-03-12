import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { LoginUserDto, RegisterUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(NATS_SERVICE) private readonly transportClient: ClientProxy,
  ) {}

  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.transportClient.send('auth.register.user', {});
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.transportClient.send('auth.login.user', {});
  }

  @Get('verify')
  verifyToken() {
    return this.transportClient.send('auth.verify.user', {});
  }
}
