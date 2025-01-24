import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [BlogModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
