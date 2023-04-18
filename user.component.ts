import { Component } from '@angular/core';
import { FileSizePipe } from '../file-size.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  num = 25;

  selectedNum ="One";

  ColorNames = ["Black","White","Blue","Green"];
  ColorsList
  =[
    {
      name:"Black",
      id:1
    },
    {
      name:"White",
      id:2
    },
    {
      name:"Blue",
      id:3
    },
    {
      name:"Green",
      id:4
    }
]

title = "The DotNet Office";
size = 2000000;



}
