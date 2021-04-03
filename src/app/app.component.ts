import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'blog-angular';
  name='Amit';
  getName(name){
  	alert(name);
  };
  obj={
  name:"peter"
  };
  site=window.location.href;
  myevent(evt) {
  console.warn(evt);
  };
  disabledBox=true;
  enableBox(){
  	this.disabledBox=!this.disabledBox;
  };
  show="green";
  color="blue";
  data1=['anil','peter','bruce','sunny'];
  data=[
  {
  	name:'anil',
  	age:20
  },
  {
  name:'bruce',
  age:36
  },
  {
  name:'amit',
  age:23
  }
  ];
  getUserValue(value){
  console.warn(value);
  };
  col_val="blue";
  changeColor(value){
  this.col_val=value.col.toString();
  console.warn(value);
  };


  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  };

  model = {
    left: true,
    middle: false,
    right: false
  };

}
