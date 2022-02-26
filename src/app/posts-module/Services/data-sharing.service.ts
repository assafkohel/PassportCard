import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card } from 'src/app/custom.type';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor(){}
  //Using any
  public editDataDetails: any = [];
  public subject = new Subject<any>();

  private messageSource_posts = new  BehaviorSubject(this.editDataDetails);
  currentMessage_posts = this.messageSource_posts.asObservable();
  
  private messageSource_details = new  BehaviorSubject(this.editDataDetails);
  currentMessage_details = this.messageSource_details.asObservable();

  private messageSource_numOfPosts = new  BehaviorSubject(this.editDataDetails);
  currentMessage_numOfPosts = this.messageSource_numOfPosts.asObservable();

  SendCardToPosts(card: Card) {
  this.messageSource_posts.next(card)
  };

  SendCardToDetails(card: Card) {
    this.messageSource_details.next(card)
    };

  SendNumOfPosts(numOfPosts : number) {
    this.messageSource_numOfPosts.next(numOfPosts)
    };
}
