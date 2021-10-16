 import { Controller, Get } from '@nestjs/common';

@Controller('init-test')
export class InitTestController {
    @Get('test')
    test() {
        return 'It is working!'
    }
}
