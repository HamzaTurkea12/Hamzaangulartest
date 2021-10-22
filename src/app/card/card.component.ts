import { Component, OnInit } from '@angular/core';
import { Cards } from './cards';
import { RestcardService } from './restcard.service';
import {map} from 'rxjs/operators';

const CACHE_KEY ='httpRepoCache';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  [x: string]: any;

  cards:Cards[] =[];
  constructor(public rsa:RestcardService) {

   }

  ngOnInit(): void {
  this.rsa.getCards().subscribe((response)=>{
    this.cards=response;
  });
  this.rs.getUsers().subscribe((next: any) => {
    localStorage[CACHE_KEY] = JSON.stringify(next);
  });
  this.rs = this.rs.pipe(
    startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))
  )

  
  }
  Back(){
    this.navCtrl.goBack();
  }
  
}
function startWith(arg0: any): any {
  throw new Error('Function not implemented.');
}

