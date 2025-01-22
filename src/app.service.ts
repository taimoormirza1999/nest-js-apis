import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {msg:'Hello'} ;

  }
  getCats(){
    return "<br/><br/><h1>We are all Cats don't mess with us</h1>" ;
  }
  getspcificCat(name){
    return "<br/><br/><h1>Hi How are you I'm a cat and my name is "+name+"</h1>" ;
  }
}
