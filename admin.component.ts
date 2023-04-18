import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  name= "The Dotnet Office";
  num1 = 100;
  num2 = 20;
  type = "number";
  placeholder = "Enter number";
  UserReadonly = false;

  num = 20;
  redColor = 'font-red';
  blueColor ='font-blue';

  pageHeader ="Student Information";
  columnSpan =2;
  FirstName = "Shruti";
  LastName = "Miriyala";
  Branch = "IT";
  Mobile = "7028922272";
  Gender = "Female";
  Age = "23";
  arialable = "NewArialLable";


  label:string = "DOTNET";

  studentName:string ="";


  ngOnInit(): void {
  }

button1Click(){
  this.label = "Dot Net Office"
}

button2Click(){
  this.label = "Label value changed on button2"
}

onChangeInput(){
  this.label = "onChangeInput label changed"
}

onChangeLabelInput(event:any){
  this.label = event.target.value
}

setName(){
  this.studentName = "Shruti Miriyala"
}

}
