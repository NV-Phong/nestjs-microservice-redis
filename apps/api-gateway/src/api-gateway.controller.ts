import { Controller, Get, Param } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,
  ) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.apiGatewayService.getUser(id);
  }
}
