import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './users';
import {map} from 'rxjs/operators';
import {NgxPaginationModule} from 'ngx-pagination';

import {Ng2SearchPipeModule} from 'ng2-search-filter';

const CACHE_KEY ='httpRepoCache';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  [x: string]: any;
     
     users:Users[]=[];
     id:any;
     p:number = 1;
  constructor(public rs:RestService) {

   }
   activePage:number = 0;  
  
   displayActivePage(activePageNumber:number){  
     this.activePage = activePageNumber 
 }
  ngOnInit(): void {
  
  this.rs.getUsers().subscribe((response)=>{
    this.users = response;

  });
  this.rs.getUsers().subscribe(next => {
    localStorage[CACHE_KEY] = JSON.stringify(next);
  });
  this.rs = this.rs.pipe(
    startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))
  )
  }
  Search(){
    if(this.id==""){
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter(res =>{
        return res.id.match(this.id);
      } );
    }
  }
  key :string ="id";
  reverse:boolean = false;
sort(key: string){
  this.key=key;
  this.reverse = !this.reverse;

}
Back(){
  this.navCtrl.goBack();
}

}
function startWith(arg0: any): any {
  throw new Error('Function not implemented.');
}

