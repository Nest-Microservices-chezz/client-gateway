import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { LoginUserDto, RegisterUserDto } from './dto';
import { catchError } from 'rxjs';
import { AuthGuard } from './guards/auth.guards';
import { Token, User } from './guards/decorators';
import { CurrentUser } from './interfaces/current-user.interface';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(NATS_SERVICE) private readonly transportClient: ClientProxy,
  ) {}

  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.transportClient
      .send('auth.register.user', registerUserDto)
      .pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.transportClient.send('auth.login.user', loginUserDto).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyToken(@User() user: CurrentUser, @Token() token: string) {
    // const user = req['user'];
    // const token = req['token'];

    //    return this.transportClient.send('auth.verify.user', {});
    return { user , token};
  }
}
