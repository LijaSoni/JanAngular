import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';
  name:string="Amal";
  age:number=10;
  check:boolean=true;

display(){
  return "hai good morning..."+this.name;
}


}
