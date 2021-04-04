import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users3',
  templateUrl: './users3.component.html',
  styleUrls: ['./users3.component.css']
})
export class Users3Component implements OnInit {

  @Input() hero2;
  constructor() { }

  ngOnInit(): void {
  }

}
