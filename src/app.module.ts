import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourceModule } from './resource/resource.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ComponentModule } from './component/component.module';

@Module({
  imports: [
     ResourceModule , 
     ConfigModule.forRoot(), 
     MongooseModule.forRoot( process.env.MONGODB_URI), 
     ComponentModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
