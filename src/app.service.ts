import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Add more methods like this, then save the file. Remove some of the methods then save the file etc.
  foo(): void {}

  foo2(): void {}

  foo3(): void {}
}
