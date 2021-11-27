import { Module } from '@nestjs/common';
import { InitTestModule } from './init-test/init-test.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { OrderModule } from './order/order.module';
import { OrderlineModule } from './orderline/orderline.module';

@Module({
  imports: [InitTestModule, UserModule, ProductModule, CategoryModule, BrandModule, OrderModule, OrderlineModule]
})
export class AppModule {}
