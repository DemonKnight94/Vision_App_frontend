import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My ui sample app';
  users: any;
  stringifiedData: any;
  parsedJson: any;


  constructor(private http: HttpClient) {}

  getUsers() {
    const obs1=this.http.get('https://localhost:5001/api/users');
    obs1.subscribe((response)=>
    {
      this.users=response;
      console.log(response);

    })
  }

  ngOnInit() {

    this.getUsers();

  }

  ngOnDestroy(){
    this.users.unsubscribe();
  }
}
