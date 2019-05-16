import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCompComponent } from './birthday-comp.component';

describe('BirthdayCompComponent', () => {
  let component: BirthdayCompComponent;
  let fixture: ComponentFixture<BirthdayCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
