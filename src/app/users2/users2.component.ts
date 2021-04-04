import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users2',
  templateUrl: './users2.component.html',
  styleUrls: ['./users2.component.css']
})
export class Users2Component implements OnInit {
  @Input() hero
  constructor() { }

  ngOnInit(): void {
  console.warn(this.hero);
  }

}
