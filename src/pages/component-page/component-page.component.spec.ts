import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPageComponent } from './component-page.component';

describe('ComponentPageComponent', () => {
  let component: ComponentPageComponent;
  let fixture: ComponentFixture<ComponentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
