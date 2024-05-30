import { Component } from '@angular/core';

@Component({
  selector: '[app-example]',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
studentList=[
  {id:1,name:"Anu",Age:21},
  {id:2,name:"Sona",Age:23},
  {id:3,name:"Kiran",Age:22}
]
today=new Date().getDay();
}

