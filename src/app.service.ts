import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  foo(): void {}

  foo2(): void {}

  foo3(): void {}
}
