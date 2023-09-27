import { Controller, Get } from '@nestjs/common';

@Controller('/greet')
export class AppController {
  @Get('/hi')
  getRootRoute() {
    return 'Hi there!';
  }
  @Get('/bye')
  getByeThere() {
    return 'Bye there!';
  }
}
