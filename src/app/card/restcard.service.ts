import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from './cards';

@Injectable({
  providedIn: 'root'
})
export class RestcardService {

  constructor(private http:HttpClient) { }

  url:string ="http://localhost:3100/Cards";
    getCards(){

      return this.http.get<Cards[]>(this.url);
    }
}
