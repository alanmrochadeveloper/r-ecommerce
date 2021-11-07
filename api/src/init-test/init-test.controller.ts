import { Controller, Get } from '@nestjs/common';

@Controller('init-test')
export class InitTestController {
  @Get('test')
  test() {
    return "It's working!"
  }
  @Get('teste')
  teste() {
    return "Está funcionando!"
  }
  @Get('api/status')
  apiStatus() {
    return "OK"
  }
  @Get('database')
  database() {
    return "Banco está funcionando!"
  }
  @Get('database/status')
  databaseStatus() {
    let test = 'teste'
    return "OK"
  }
}
