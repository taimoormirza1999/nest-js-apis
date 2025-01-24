import { Injectable } from '@nestjs/common';
import { CreateBlogData } from 'src/blog/blog.data';

@Injectable()
export class TestService {
    private readonly data: CreateBlogData[] = [];
    addData(data: CreateBlogData) {
        const newId = (this.data.length + 1);
        const newdata={
            id: newId,
          ...data
        }
        
        this.data.push(newdata);
        return JSON.stringify(data)+" has been added successfully.";
    }
    getData() {
        if (this.data.length>0) {
            return this.data;
        } else {    
            return ['No data found'];
        }
    }

    // updateData (id: number, data: CreateBlogData): string {
    //     const blogIndex = this.data.findIndex(blog => blog.id === id);
    //     if (blogIndex === -1) return 'Blog not found';
    //     this.data[blogIndex] = {...this.data[blogIndex],...data};
    //     return JSON.stringify(data)+" has been updated successfully. Current data: ";
    // }

    removeData(index: number): string {
        this.data.splice(index, 1);
        if(this.data.length>0){
            return "data has been deleted successfully. ";
        }else{
            return "No data found to delete.";
        }
    }
    updateData(id: number, newData) {
      if(this.data.length > 0){
        this.data[id-1] = {
            id: parseInt(id.toString()),
           ...newData,
        };
        return "data has been updated successfully. ";
      }else{
        return "No data found to update.";
      }
    }
   findData(title: string) {
    if(this.data.length > 0){
        return this.data.filter(item => item.title.includes(title));
    }else{
        return "No data found with this title.";
    }
  }


}
