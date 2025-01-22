import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService, Blog } from './blog.service';  
import { CreateBlogData, UpdateBlogDto } from './blog.data';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogData: CreateBlogData): Blog {
    return this.blogService.create(createBlogData);
  }

  @Get()
  findAll(): Blog[] {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Blog | undefined {
    return this.blogService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto): Blog | { error: string } {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Blog | { error: string } {
    return this.blogService.remove(id);
  }
}
