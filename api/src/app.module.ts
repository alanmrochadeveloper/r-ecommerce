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
import { ConfigModule } from '@nestjs/config';
/* import ormconfig from 'ormconfig'; */

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env",".env.development",".env.hml",".env.production"],
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      database: 'r-ecommerce',
      username: 'postgres',
      password: '#Postgres123',
      entities: [__dirname + "/**/entities/*.entity{.ts,.js}"], 
      logging: true,
      logger: 'advanced-console',
      migrations:  [__dirname + "/migrations/*{.ts,.js}"],
      cli: {
        migrationsDir: "src/migrations",
        entitiesDir: "src/migrations",
        subscribersDir: "src/migrations",
      },
      migrationsRun: true,
      // synchronize: false,
      // autoLoadEntities: true
    }),
    InitTestModule,
    UserModule,
    ProductModule,
    CategoryModule,
    BrandModule,
    OrderModule,
    OrderlineModule,
    PersonalInfoModule,
  ],
})
export class AppModule {}
