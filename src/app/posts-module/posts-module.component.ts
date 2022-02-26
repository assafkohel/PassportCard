import { Component, OnInit } from '@angular/core';
import { PostItem } from '../custom.type';
import { DataSharingService } from './Services/data-sharing.service';
import { DatabaseService } from './Services/database.service';
import { ServerService } from './Services/server.service';

@Component({
  selector: 'app-posts-module',
  templateUrl: './posts-module.component.html',
  styleUrls: ['./posts-module.component.css']
})
export class PostsModuleComponent implements OnInit {

  constructor( private serverService: ServerService,
                private dataSharingService : DataSharingService,
                private databaseService : DatabaseService) { }

  // Holds the current selected user id
  currentUserId :string;

  // The binded content of the search text box
  value : string = ""; 

  // Filtered items to display
  filteredItems :Array<PostItem>=[]; 

  // Items to display (posts)
  items : Array<PostItem> = [];

  ngOnInit() {
    this.AssignCopy();

    this.dataSharingService.currentMessage_posts.subscribe(card => 
      {
        this.currentUserId = String(card['id']);
        this.GetPosts('userId',this.currentUserId)
      }
      ); 
  }

  // Update filteredItems list according to items list
  AssignCopy(){
    this.filteredItems = Object.assign([], this.items);
  }

  // Filter filteredItems - if value was inserted in search textbox
  FilterItem(value){
    if(!value){
        this.AssignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.items).filter(
        item => String(item.title).toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  // Get posts by user id
  GetPosts(property:string,value:string){
    // determine if user posts already have been retreived
    if(this.databaseService.IsUserPostsExist(value))
    {
      this.items =this.databaseService.GetUserPosts(value);
      this.filteredItems = this.items;
      return;
    }

    return this.serverService.GetPosts(property,value).subscribe(data => {
      this.filteredItems = [];
      this.items =[];
      var tmpArray = [];
      data.forEach(post => {
        tmpArray.push({
          title: post['title'],
          body : post['body']
        });
      });
      this.items = this.databaseService.AddUserPostsToDbAndGetThem(value,tmpArray);
      this.filteredItems = this.items;
    });
  }
  
  // Delete post
  OnDeletePost(post :PostItem){
    this.databaseService.DeletePost(this.currentUserId,post);
    this.GetPosts("userId",this.currentUserId);
  }

  
}
