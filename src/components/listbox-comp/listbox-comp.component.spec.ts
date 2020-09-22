import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxCompComponent } from './listbox-comp.component';

describe('ListboxCompComponent', () => {
  let component: ListboxCompComponent;
  let fixture: ComponentFixture<ListboxCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListboxCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListboxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
