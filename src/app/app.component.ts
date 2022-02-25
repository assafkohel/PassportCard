import { Component, OnInit } from '@angular/core';

export interface Card {
  name: string;
  username: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  cards : Array<Card> = [] ;

  selectedUser:Card;
  ngOnInit(){
    for (let index = 0; index < 4; index++) {
      this.cards.push(
        {
          name:"Assaf",
          username: "Assafko",
          email: "@gmail.com",
          website: "www"
        }
      );
    }

    this.selectedUser = this.cards[0];

  }
}
