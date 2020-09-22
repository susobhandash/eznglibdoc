import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderCompComponent } from './reorder-comp.component';

describe('ReorderCompComponent', () => {
  let component: ReorderCompComponent;
  let fixture: ComponentFixture<ReorderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
