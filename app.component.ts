import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUnitTest';
  count:number = 10;

 myInputMessage:string ="I am the parent component";
 outputDecorator = "";
 GetChildData(data:any){
  this.outputDecorator = data;
}

  showMsg(msg:string):string{
    return msg;
  }

  increaseCount(num:number){
    this.count = this.count + num;
  }

  decreaseCount(num:number){
    this.count = this.count - num;
  }

  
}
