export default {
      type: 'postgres',
      host: 'db',
      port: 5432,
      database: 'r-ecommerce',
      username: 'postgres',
      password: '#Postgres123',
      entities: ['dist/**/entities/*.entity.js'], 
      logging: true,
      logger: 'advanced-console',
      migrations:  [ 'dist/migrations/*.js'],
      cli: {
        migrationsDir: 'src/migrations',
      },
      synchronize: false,
    }
