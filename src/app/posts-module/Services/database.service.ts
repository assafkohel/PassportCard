import { Injectable } from '@angular/core';
import { PostItem } from 'src/app/custom.type';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private dataSharingService : DataSharingService) { }

  // Holds all posts in Dictionary => <user id , posts array>
  posts_db = new Map< string, Array<PostItem>>();

  // Determine if user is already exists
  IsUserPostsExist(userId:string){
    if(this.posts_db.has(userId))
      return true;
    return false;
  }

  // Get all posts of specific user - by user id
  GetUserPosts(userId:string){
    if(this.IsUserPostsExist(userId))
    {
      this.OnUpdateUserPosts(this.posts_db.get(userId).length);
      return this.posts_db.get(userId);
    }
    return [];
  }

  // Add user's posts to DB
  AddUserPostsToDbAndGetThem(userId:string,posts:Array<PostItem>)
  {
    this.posts_db.set(userId,posts);
    this.OnUpdateUserPosts(this.posts_db.get(userId).length);
    return this.GetUserPosts(userId);
  }

  // Delete post from DB
  DeletePost(userId:string,post:PostItem){
    this.posts_db.get(userId).splice(this.posts_db.get(userId).indexOf(post),1);
    this.OnUpdateUserPosts(this.posts_db.get(userId).length);
  }

  // Update app.component about user's number of posts value
  OnUpdateUserPosts(numOfPosts : number)
  {
    this.dataSharingService.SendNumOfPosts(numOfPosts);
  }
}
