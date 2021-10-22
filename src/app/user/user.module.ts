import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
