import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, CacheStoreFactory } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis-yet';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { MoviesModule } from './movies/movie.module';
import { Movie } from './movies/movie.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Movie, User],
      synchronize: true,
    }),
    CacheModule.register({
      store: redisStore as unknown as CacheStoreFactory,
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      ttl: 5,
    }),
    AuthModule,
    UsersModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
