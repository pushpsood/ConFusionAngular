import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* 
  //inline template using back qoutes
  //inline template not recommended but good for simple application
  template: `<h1>{{tittle}}</h1>
  //same for styles below too
  `,
  */
  styleUrls: ['./app.component.scss']
})
//below command will make import data to components
export class AppComponent {
  title = 'conFusion';
}
