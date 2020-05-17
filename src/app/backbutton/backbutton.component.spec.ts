import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackbuttonComponent } from './backbutton.component';

describe('BackbuttonComponent', () => {
  let component: BackbuttonComponent;
  let fixture: ComponentFixture<BackbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
