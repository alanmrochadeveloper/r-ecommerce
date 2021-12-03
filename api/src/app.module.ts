import { Module } from '@nestjs/common';
import { InitTestModule } from './init-test/init-test.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { OrderModule } from './order/order.module';
import { OrderlineModule } from './orderline/orderline.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      database: 'r-ecommerce',
      username: 'postgres',
      password: '#Postgres123',
      entities:[join(__dirname, '**', '*.entity.{ts, js}')],
      autoLoadEntities: true,
      logging: true,
      logger: "advanced-console",
      synchronize: true,
    }), 
    InitTestModule,
    UserModule,
    ProductModule,
    CategoryModule,
    BrandModule,
    OrderModule,
    OrderlineModule,
    PersonalInfoModule
  ]
})
export class AppModule { }
