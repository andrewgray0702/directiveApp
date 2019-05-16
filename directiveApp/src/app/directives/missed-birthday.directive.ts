import { Directive, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '.birthday'
})
export class MissedBirthdayDirective implements OnInit{
  @Input('birthday') birthday: string;
  myBirthday: Date = new Date('1999-07-02')
  constructor() { }
  @HostBinding('class.missed') private missed: boolean;
  @HostBinding('class.is-older') private isOlder: boolean;
  checkDate(){
    let now = new Date(Date.now());
    let userBday = new Date(this.birthday);
    this.isOlder = userBday < this.myBirthday;
    this.missed = (userBday.getMonth() < now.getMonth() || 
    (now.getMonth() === userBday.getMonth() && userBday.getDate() < now.getDate()))
  }
  ngOnInit(){
      console.log(this.birthday);
      this.checkDate();
  }

}
