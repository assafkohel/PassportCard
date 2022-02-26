export interface TabItem {
    label: string;
    route: string;
  }
  
  export interface Card {
    id:number;
    name: string;
    username: string;
    email: string;
    website: string,
    phone:string,
    address:Address, 
    company :Company,
    color: string;
    isSelected : boolean
  }

  export interface PostItem {
    title:string;
    body: string;
  }

  export interface Address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo_lat : string,
    geo_lon : string
  }

  export interface Company{
    name: string,
    catchPhrase: string,
    bs: string
  }