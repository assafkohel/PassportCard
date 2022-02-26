import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDescriptionModuleComponent } from './user-description-module.component';

describe('UserDescriptionModuleComponent', () => {
  let component: UserDescriptionModuleComponent;
  let fixture: ComponentFixture<UserDescriptionModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDescriptionModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDescriptionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
