import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PostItem } from 'src/app/custom.type';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  // Server url
  apiURL: string = 'https://jsonplaceholder.typicode.com/';
  

  // Not in use
  // Http header in case of different requests configurations
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private httpClient: HttpClient) {}
  
  
  // Get all users from server
  GetAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + 'users')
    .pipe(
      retry(1),
      catchError(this.HttpError)
    )
  }  

  // Not in use
  // Get all posts from server
  GetAllPosts(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + 'posts')
    .pipe(
      retry(1),
      catchError(this.HttpError)
    )
  }  

  // Get all posts of specific user - by user id
  GetPosts(property:string,value:string): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + 'posts?' + property + '=' + value)
    .pipe(
      retry(1),
      catchError(this.HttpError)
    )
  }  

  // Http error handling function
  HttpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

  // Get the generated token for specific request
  GetToken()
  {
    return this.GetRandomNumber(100,10000)
  }

  // Get random number => 100-10,000
  GetRandomNumber(min , max)
  {
    var randNum = Math.random() * (max - min);
    return Math.floor(randNum + min); 
   }
}
