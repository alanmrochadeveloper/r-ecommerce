import { Controller, Get } from '@nestjs/common';

@Controller('init-test')
export class InitTestController {
  @Get('test')
  test() {
    return "It's working!"
  }
  @Get('teste')
  teste(){
    return "Está funcionando!"
  }
  @Get('database')
  database(){
      return 'Banco está funcionando!'
  }
}
