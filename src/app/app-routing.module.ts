import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {UserComponent} from '../app/user/user.component';
import {NgxPaginationModule} from 'ngx-pagination';

import {Ng2SearchPipeModule} from 'ng2-search-filter';

import {CardComponent} from '../app/card/card.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'card',component:CardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
