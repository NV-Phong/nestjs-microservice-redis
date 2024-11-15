import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_user' })
  getUser(data: { id: string }) {
    return { id: data.id, name: 'NV-Phong', email: 'nhinfcaisloonf@gmail.com' };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
