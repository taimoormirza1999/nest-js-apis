import { Injectable } from '@nestjs/common';
import { CreateBlogData, UpdateBlogDto } from './blog.data';

export interface Blog {
    id: string;
    title: string;
    content: string;
  }
@Injectable()

export class BlogService {
    private blogs: Blog[] = [];

    create(createBlogData: CreateBlogData) {
        const newBlog: Blog = {
          id: (this.blogs.length + 1).toString(),
          ...createBlogData,
        };
        this.blogs.push(newBlog);
        return newBlog;
      }
      findAll() {
        return this.blogs;
      }
    
      findOne(id: string) {
        return this.blogs.find(blog => blog.id === id);
      }
    
      update(id: string, UpdateBlogDto: UpdateBlogDto) {
        const blogIndex = this.blogs.findIndex(blog => blog.id === id);
        if (blogIndex === -1) return { error: 'Blog not found' };
    
        this.blogs[blogIndex] = { ...this.blogs[blogIndex], ...UpdateBlogDto };
        return this.blogs[blogIndex];
      }
    
      remove(id: string) {
        const blogIndex = this.blogs.findIndex(blog => blog.id === id);
        if (blogIndex === -1) return { error: 'Blog not found' };
    
        return this.blogs.splice(blogIndex, 1)[0];
      }

}
