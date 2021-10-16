import { Module } from '@nestjs/common';
import { InitTestModule } from './init-test/init-test.module';

@Module({
  imports: [InitTestModule]
})
export class AppModule {}
