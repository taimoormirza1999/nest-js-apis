import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBlogData } from 'src/blog/blog.data';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    constructor(private testService: TestService) {}

@Get()
  getHello() {
    return this.testService.getData();
  }
@Post()
  postHello(@Body() data: CreateBlogData) {
    return this.testService.addData(data);
  }
  
  @Put(':id')
  putHello(@Param('id') id:number, @Body() data ) {
    return this.testService.updateData(id,data);
  }

  @Delete(':id')
  deleteHello(@Param('id') id:number): string {
   return this.testService.removeData(id-1);
  }

  @Get('/:title')
  getHelloById(@Param('title') title: string) {
    return this.testService.findData(title);
  }

}
