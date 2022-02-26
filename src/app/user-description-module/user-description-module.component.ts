import { Component, OnInit } from '@angular/core';
import { Card } from '../custom.type';
import { DataSharingService } from '../posts-module/Services/data-sharing.service';

@Component({
  selector: 'app-user-description-module',
  templateUrl: './user-description-module.component.html',
  styleUrls: ['./user-description-module.component.css']
})
export class UserDescriptionModuleComponent implements OnInit {

  constructor(private dataSharingService:DataSharingService) { }

  // Selected user
  user : Card ;

  ngOnInit() {

    // When user is selected
    this.dataSharingService.currentMessage_posts.subscribe(card => 
      {
        if(card.address != undefined)
          this.user =card;
      }
      ); 
  }

}
