import { Module } from '@nestjs/common';
import { InitTestModule } from './init-test/init-test.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [InitTestModule, UserModule]
})
export class AppModule {}
