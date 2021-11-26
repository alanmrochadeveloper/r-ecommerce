import { Module } from '@nestjs/common';
import { InitTestModule } from './init-test/init-test.module';
import { UserModule } from './user/user.module';
import { PurchageModule } from './purchage/purchage.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [InitTestModule, UserModule, PurchageModule, ProductModule, CategoryModule]
})
export class AppModule {}
