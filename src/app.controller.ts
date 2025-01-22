import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return "hh"
  }
  @Get('cat')
  findAll() {
    return this.appService.getCats();
  }

  @Get('cat/:name')
  findOne(@Param('name') name: string) {
    return this.appService.getspcificCat(name);
  }
// findOne(@Param() params) {
//   console.log(params.id);
//   return `This action returns a #${params.id} cat`;
// }



}
