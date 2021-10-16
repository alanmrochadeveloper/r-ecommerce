import { Module } from '@nestjs/common';
import { InitTestController } from './init-test.controller';

@Module({
  controllers: [InitTestController]
})
export class InitTestModule {}
