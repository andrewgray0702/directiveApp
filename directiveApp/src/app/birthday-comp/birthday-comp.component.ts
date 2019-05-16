import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-comp',
  templateUrl: './birthday-comp.component.html',
  styleUrls: ['./birthday-comp.component.scss']
})
export class BirthdayCompComponent implements OnInit {
  dateSubmitted: boolean;
  userBirthday: string;
  constructor() { }
  submitDate(){
    this.dateSubmitted = true;
  }
  reset(){
    this.dateSubmitted = false;
  }
  ngOnInit() {
  }

}
