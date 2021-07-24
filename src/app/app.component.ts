import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password=''
  //event binding method
  onButtonClick(){
   this.password='My Password!!!';
  }

  getName(){
    return 'Alex';
  }
}
