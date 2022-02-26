import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsModuleComponent } from './posts-module.component';

describe('PostsModuleComponent', () => {
  let component: PostsModuleComponent;
  let fixture: ComponentFixture<PostsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
