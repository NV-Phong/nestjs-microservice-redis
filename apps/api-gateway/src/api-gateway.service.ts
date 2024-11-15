import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class ApiGatewayService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    });
  }

  async getUser(id: string) {
    return this.client.send({ cmd: 'get_user' }, { id });
  }
  getHello(): string {
    return 'Hello World!';
  }
}
