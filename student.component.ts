import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  sum =0;
  result:any;
  studentResult:any;
  CountNumber:number =0;
  private Name:string = "";

  title = "The DotNet Office";
  @Input() myinputMsg!: string;
 
  @Output() myOutput:EventEmitter<string> = new EventEmitter();
  outputMessage:string = "I am output directory.";

  constructor(public service:StudentService) {}

  ngOnInit(): void {
    this.title = this.myinputMsg;
  }

  sendValues(){
    this.myOutput.emit(this.outputMessage);
  }

   private calculate(num1:number,num2:number){
    this.sum = num1 + num2;
    return this.sum;
  }

  saveData(){
    let info = {
      sumval: this.calculate(5,5),
      name:"Dot Net Office"
    };
    this.SaveDataIntoConsole(info);
    this.service.SaveDetails(info).subscribe(res =>{
      this.result = res;
    })
  }

  StudentResult(){
    if(this.calculate(10,20) >= 40)
    {
      this.studentResult= "Pass";
      return this.studentResult;
    }
    else
    {
      this.studentResult= "Fail";
      return this.studentResult;
    }
  }  

  SaveDataIntoConsole(info:any){
    console.log(info);
  }

  increaseNum(){
    this.CountNumber = this.CountNumber + 1 ;
  }

  decreaseNum(){
    this.CountNumber = this.CountNumber - 1 ;
  }

  private ShowName(){
    this.Name = "DotNet Office";
  }

}
