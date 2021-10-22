export class Cards {
    CardId:string;
    FirstName:string;
    LastName:string;
    AvatarImage:string;

    constructor(CardId:string,FirstName:string,LastName:string,AvatarImage:string)
    {
       this.CardId=CardId;
       this.FirstName=FirstName;
       this.LastName=LastName;
       this.AvatarImage = AvatarImage;
    }
    
}
