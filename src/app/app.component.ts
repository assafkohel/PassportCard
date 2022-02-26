import { Component, OnInit } from '@angular/core';
import { Card, TabItem } from './custom.type';
import { DataSharingService } from './posts-module/Services/data-sharing.service';
import { DatabaseService } from './posts-module/Services/database.service';
import { ServerService } from './posts-module/Services/server.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor( private dataSharingService : DataSharingService,
              private serverService: ServerService,
              private databaseService : DatabaseService){}

  // All tabs
  tabs : Array<TabItem> =[
    {
      label:"posts",
      route: "posts",
    },
    {
      label:"user description",
      route: "userDescription",
    }
  ];

  // User cards to display
  cards : Array<Card> = [] ;

  // Previous selected card array index
  prevSelectedCardIndex:number = -1;

  // Current selected card array index
  currentSelectedCardIndex :number= -1;

  // Indicates if user has less than 10 posts
  isSelectedCard_numberOfPosts_LessThanTen :boolean;

  // Selected user card
  selectedUser:Card;

  ngOnInit(){
    this.GetAllUsers();

    // Get the current user number of posts
    this.dataSharingService.currentMessage_numOfPosts.subscribe(numOfPosts => 
      {
        if(numOfPosts < 10)
          this.isSelectedCard_numberOfPosts_LessThanTen = true;
        else
          this.isSelectedCard_numberOfPosts_LessThanTen = false;
      }
      ); 
  }

  // When user card is selected
  OnSelectedCardEvent(event : MouseEvent,card:Card){
    this.currentSelectedCardIndex = this.cards.indexOf(card);
    this.selectedUser = this.cards[this.currentSelectedCardIndex];
    this.cards[this.currentSelectedCardIndex].isSelected = true;
    if(this.prevSelectedCardIndex >= 0)
      this.cards[this.prevSelectedCardIndex].isSelected = false;
    this.prevSelectedCardIndex = this.currentSelectedCardIndex;

    this.dataSharingService.SendCardToPosts(this.cards[this.currentSelectedCardIndex]);
    this.dataSharingService.SendCardToDetails(this.cards[this.currentSelectedCardIndex]);
  }

  // Retreive all user from server
  GetAllUsers()
  {
    return this.serverService.GetAllUsers().subscribe(data => {
      data.forEach(user => {
        this.cards.push(
          {
            id: user['id'],
            name: user['name'],
            username: user['username'],
            email: user['email'],
            website: user['website'],
            phone:user['phone'],
            address:
            {
              street: user['address']['street'],
              suite: user['address']['suite'],
              city: user['address']['city'],
              zipcode: user['address']['zipcode'],
              geo_lat : user['address']['geo_lat'],
              geo_lon : user['address']['geo_lon']
            }
            ,
            company:
            {
              name: user['company']['name'],
              catchPhrase: user['company']['catchPhrase'],
              bs: user['company']['bs']
            }
            ,
            color: 'white',
            isSelected : false
          }
        );
      });
    });
  }

}
