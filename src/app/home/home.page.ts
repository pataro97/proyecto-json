import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map }  from  'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  guitars: any;
  constructor(private httpClient: HttpClient) {
    this.guitars = 
    this.httpClient.get('https://api.myjson.com/bins/1ccmr0').pipe(map(res => 
    res['results']));
  }

}
