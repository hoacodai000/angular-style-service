import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildAComponent } from './component-child-a.component';

describe('ComponentChildAComponent', () => {
  let component: ComponentChildAComponent;
  let fixture: ComponentFixture<ComponentChildAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChildAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
