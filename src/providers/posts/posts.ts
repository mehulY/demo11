import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PostsProvider Provider');
  }

  getRemoteData(){
  	return this.http.get('https://www.cilvira.com/api.php?url=account/contact&type=json&consumer_key=ck_029ee9d73323f907e15e16dc2acddf64693a72c8&consumer_secret=cs_5655dbb676dcf6b401d1ea4234bb7f7240d17c53');
  }

  getJsonData() {
  	return this.http.get('http://api.tvmaze.com/search/shows?q=big%20bang');
  }

  getProductsData(){
    return this.http.get('../assets/data/redditData.json');
  }
}
