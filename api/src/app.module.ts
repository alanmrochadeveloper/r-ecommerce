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
import { PersonalInfo } from './personal-info/entities/personal-info.entity';
import { Orderline } from './orderline/entities/orderline.entity';
import { Order } from './order/entities/order.entity';
import { Brand } from './brand/entities/brand.entity';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';
import { User } from './user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 15432,
    username: 'postgres',
    password: 'postgres',
    database: '#Postgres123',
    entities: [User, Product, Category, Brand, Order, Orderline, PersonalInfo],
    synchronize: true,
  }), InitTestModule, UserModule, ProductModule, CategoryModule, BrandModule, OrderModule, OrderlineModule, PersonalInfoModule]
})
export class AppModule { }
